const dataSiswa=require("../data/siswa.js")

function keteranganLulus(i){

    if(dataSiswa[i].tahun_lulus<2019){
         return"Lulus sebelum covid"

    } else if(dataSiswa[i].tahun_lulus>=2019 && dataSiswa[i].tahun_lulus<=2021){
         return "Lulus saat covid"
        
    }else { 
        return " Lulus setelah covid "
    }
}

module.exports = keteranganLulus;

