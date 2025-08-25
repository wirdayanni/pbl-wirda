import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = async()=>{
    const response=await axios.get('http://localhost:8000/barang')
    return response.data
}

const DaftarBarang = () => {
  const { data} = useSWR('barang', fetcher)
  if (!data) return <h1>Loading...</h1>

  return (
    <div>
      <h2>Daftar Barang</h2>
      <Link to="/add">Tambah</Link>
      <table border="1">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((barang, index) => (
            <tr key={barang.id}>
              <td>{index + 1}</td>
              <td>{barang.nama_barang}</td>
              <td>{barang.harga}</td>
              <td>{barang.stok}</td>
              <td>
                <Link to={`/edit/${barang.id}`} className="bg-blue-500">Edit</Link>
                <button className="bg-red-500">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DaftarBarang