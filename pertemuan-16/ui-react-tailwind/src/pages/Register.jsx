import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../config/Constants';
import axios from 'axios';
import Input from '../components/Input';
import Button from '../components/Button';

function Register({ onSwitchToLogin }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Mengirim...");

    try {
      const res = await axios.post(`${baseUrl}/auth/register`, form);
      setStatus(`User ${res.data.nama} berhasil dibuat`);
    } catch (err) {
      setStatus('Gagal mengirim data');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-blue-600 text-center">Form Pendaftaran</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input name="name" value={form.name} onChange={handleChange} placeholder="Nama Lengkap" required />
        <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <Input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
        <Button type="submit" variant="primary">Kirim</Button>
      </form>

      {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}

      <div className="text-center mt-4">
        <p className="text-sm">Sudah punya akun?</p>
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-blue-600 hover:underline mt-1"
        >
          Login disini
        </button>
      </div>
    </div>
  );
}

export default Register;