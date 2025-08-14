let belanja = [
    { nama: "New Balance NB530", harga: 390000 },
    { nama: "Nike Vomero", harga: 350000 },
    { nama: "Adidas Samba", harga: 180000 },
    { nama: "Onitsuka Tiger Mexico", harga: 420000 }
];

let total = 0;
console.log("=====Rincian Belanja Sepatu=====");
for (let i = 0; i < belanja.length; i++) {
    console.log((i + 1) + ". " + belanja[i].nama + " - Rp. " + belanja[i].harga);
    total += belanja[i].harga;
}

console.log("\nTotal Belanja = Rp. " + total.toLocaleString("id-ID"));

let diskon = 0;
if (total >= 800000) {
    diskon = 15;
} else if (total >= 500000 && total < 800000) {
    diskon = 10;
} else if (total >= 250000 && total < 500000) {
    diskon = 5;                                      
} else {
    diskon = 0;
}

// if singkat
// let diskon=total<250000?0: total<500000?5: total<800000?10:15

console.log("Diskon = " + diskon + "%");

let potongan = total * (diskon / 100);
let totalSetelahDiskon = total - potongan;
console.log("Potongan Harga = Rp " + potongan.toLocaleString("id-ID"));
console.log("Total Setelah Diskon = Rp. " + totalSetelahDiskon.toLocaleString("id-ID"));

let pembayaran = 1200000;
let kembalian = pembayaran - totalSetelahDiskon;
console.log("Pembayaran = Rp. " + pembayaran.toLocaleString("id-ID"));
console.log("Kembalian = Rp. " + kembalian.toLocaleString("id-ID"));