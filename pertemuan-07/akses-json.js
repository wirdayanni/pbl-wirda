const fs=require("fs");

// Membuka dan membaca file JSON
// otomatis buka
const teks=fs.readFileSync("data.json");
const data=JSON.parse(teks);

console.log("Data Awal: ", data);

// Menulis data baru ke array
// data.push({id: 4, nama:"Jeremy", usia:28})

// Meghapus data baris paling bawah
// data.pop()

// Menyimpan (menulis ulang)
// otomatis menutup
fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

console.log("Data berhasil ditambahkan dan disimpan ulang");
console.log("Isi AKhir : ", data);

for (let i = 0; i < data.length; i++) {
    console.log("nama : " + data[i].nama);
}