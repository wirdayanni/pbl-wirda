/* Aplikasi Node.js paling sederhana
Memanggil fungsi dan menampilkan nama aplikasi */

const namaApp = require('./config/namaApp');
const tampilkanSalam = require('./fungsi/tampilSalam');

// Menampilkan nama aplikasi ke terminal
console.log("Aplikasi", namaApp);

// Menampilkan salam ke pengguna
tampilkanSalam();