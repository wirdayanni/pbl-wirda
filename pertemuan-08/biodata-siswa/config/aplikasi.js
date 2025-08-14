/* Menyimpan nama aplikasi sebagai konstanta */

// const APP_NAME = "\n=== INFO APLIKASI ===";
// module.exports = APP_NAME;
const VERSI = "1.0.0";
const PENANGGUNG_JAWAB = "Wirda Yani"

function infoAplikasi(){
    console.log("\n=== INFO APLIKASI ===");
    console.log("Versi            : ", VERSI);
    console.log("Penanggung Jawab : ", PENANGGUNG_JAWAB);
}
module.exports=infoAplikasi;