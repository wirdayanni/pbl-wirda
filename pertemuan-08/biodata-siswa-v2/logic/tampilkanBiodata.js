const dataSiswa=require("../data/siswa.js")
const keteranganLulus=require("./logikaKategori.js")


function biodata() {
    for (let i= 0; i< dataSiswa.length; i++) {
     console.log("nama              :",dataSiswa[i].nama)
     console.log("umur              :",dataSiswa[i].umur)
     console.log("asal              :",dataSiswa[i].asal)
     console.log("sekolah           :",dataSiswa[i].sekolah)
     console.log("tahun lulus       :",dataSiswa[i].tahun_lulus)
     console.log("kategori kodisi   :",keteranganLulus(i))
     console.log("...............................");
             
    }
}

module.exports=biodata