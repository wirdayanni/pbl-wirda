const dataSiswa = require('../data/siswa');
let tahunLulus = dataSiswa.map(obj => obj.tahunLulus);

function kategoriTahun(tahunLulus){
    if (tahunLulus<2019){
        return "Lulus Sebelum Covid";
    }
    else if (tahunLulus>=2019 && tahunLulus<=2021){
        return "Lulus Saat Covid";
    }
    else {
        return "Lulus Setelah Covid";
    }
}

module.exports= kategoriTahun;

