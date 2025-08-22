import { useContext, useEffect, useState } from 'react';
import { baseUrl } from "/src/config/constants";
import { AuthContext } from "/src/context/AuthContext";
import axios from 'axios';
import Table from '../../components/Table';
import Button from '../../components/Button';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function DataPeserta() {
  const [peserta, setPeserta] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}/peserta`);
      const dataWithNo = res.data.data.map((item, index) => ({
        ...item,
        no: index + 1,
      }));
      setPeserta(dataWithNo);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleDelete = async (peserta) => {
    const konfirmasi = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data peserta akan dihapus secara permanen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal"
    });

    if (konfirmasi.isConfirmed) {
      try {
        await axios.delete(`${baseUrl}/peserta/${peserta.id}`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        });
        Swal.fire("Berhasil!", "Peserta telah dihapus.", "success");
        fetchData(); // Muat ulang data setelah penghapusan
      } catch (err) {
        Swal.fire("Gagal!", "Gagal menghapus data.", "error");
        console.error("Gagal menghapus data:", err);
      }
    }
  };

  const columns = [
    { header: 'No.', accessor: 'no' },
    { header: 'Nama', accessor: 'name' },
    { header: 'Status', accessor: 'status' },
    {
      header: 'Aksi',
      accessor: 'actions',
      render: (row) => (
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => navigate(`/peserta/view/${row.id}`)}>View</Button>
          <Button variant="success" onClick={() => navigate(`/peserta/edit/${row.id}`)}>Edit</Button>
          <Button variant="danger" onClick={() => handleDelete(row)}>Hapus</Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Data Peserta</h2>
      <div className="mb-4">
        <Button onClick={() => navigate("/peserta/tambah")}>Tambah Peserta</Button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table columns={columns} data={peserta} />
      )}
    </div>
  );
}

export default DataPeserta;