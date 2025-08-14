/* Fungsi untuk menampilkan salam ke terminal
Author:  Wirda
Version: 1.0
Date: 12 Agustus 2025 */

function tampilkanSalam() {
    // Menyimpan pesan salam
    const pesan = "Halo! selamat datang di dunia Node.js"

    // Menampilkan pesan ke termina
    console.log(pesan);
}

// Mengeskpor fungsi agar bisa digunakan di file lain
module.exports= tampilkanSalam;