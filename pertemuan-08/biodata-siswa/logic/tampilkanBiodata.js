/* Fungsi untuk menampilkan Biodata
Author:  Wirda
Version: 1.0
Date: 12 Agustus 2025 */

const dataSiswa = require('../data/siswa');
let kategori = require('./logikaKategori');
// let tahunLuluss = dataSiswa.map(obj => obj.tahunLulus);
// let kategori = kategoriTahun()

function tampilkanBiodata() {
    dataSiswa.forEach(siswa => {
        console.log("Nama             : " + siswa.nama);
        console.log("Umur             : " + siswa.umur);
        console.log("Asal             : " + siswa.asal);
        console.log("Sekolah          : " + siswa.sekolah);
        console.log("Tahun Lulus      : " + siswa.tahunLulus);
        console.log("Kategori Kondisi : " + kategori(siswa.tahunLulus))
    });   
}

// Mengeskpor fungsi agar bisa digunakan di file lain
module.exports= tampilkanBiodata;