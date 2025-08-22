import { useEffect, useState, useLocation, useParams } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { baseUrl } from "../config/Constants";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

function Form({ mode = "create" }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const [form, setForm] = useState({ name: "", status: "aktif" });
  const [isReadOnly, setIsReadOnly] = useState(false);

  const title = 
    mode === "create" ? "Tambah Peserta" :
    mode === "edit" ? "Edit Peserta" :
    "Detail Peserta";

  useEffect(() => {
    if ((mode === "edit" || mode === "view") && id) {
      axios.get(`${baseUrl}/peserta/${id}`)
        .then((res) => {
          setForm({ name: res.data.data.name, status: res.data.data.status });
        })
        .catch((err) => {
          Swal.fire("Error", "Gagal mengambil data.", "error");
          navigate("/peserta");
        });
    }
    if (mode === "view") {
      setIsReadOnly(true);
    } else {
      setIsReadOnly(false);
    }
  }, [id, mode, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "create") {
        await axios.post(`${baseUrl}/peserta`, form, {
          headers: { Authorization: `Bearer ${user.accessToken}` },
        });
      } else if (mode === "edit") {
        await axios.put(`${baseUrl}/peserta/${id}`, form, {
          headers: { Authorization: `Bearer ${user.accessToken}` },
        });
      }
      Swal.fire("Berhasil", "Data peserta disimpan.", "success");
      navigate("/peserta");
    } catch (err) {
      Swal.fire("Gagal", err.response?.data?.message || "Terjadi kesalahan", "error");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">{title}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input 
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nama Peserta"
            required
            readOnly={isReadOnly}
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Status
          </label>
          <select 
            name="status"
            value={form.status}
            onChange={handleChange}
            disabled={isReadOnly}
            className="p-2 border rounded"
          >
            <option value="aktif">Aktif</option>
            <option value="nonaktif">Nonaktif</option>
          </select>
          
          <div className="flex gap-2 justify-end">
            {!isReadOnly && (
              <Button type="submit" variant="primary">
                Simpan
              </Button>
            )}
            <Button type="button" variant="secondary" onClick={() => navigate("/peserta")}>
              Kembali
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;