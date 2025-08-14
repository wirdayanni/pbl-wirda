/* let tinggi = {
    Rose: "178 cm",
    Magnolia:"153 cm",
    Daisy:"165 cm",
    Jasmine:"161 cm",
    Violet:"159 cm"
} */

/* for (let nama in tinggi) {
    console.log(nama + " Memiliki tinggi " + tinggi);
} */

/* console.log("======Urutkan======")

Object.keys(tinggi).sort().forEach(function(nama){
    console.log(nama + " : " + tinggi[nama]);
}); */

let tinggiBadan = [
    {nama: "Rose", tinggi:"178 cm"},
    {nama: "Magnolia", tinggi:"153 cm"},
    {nama: "Daisy", tinggi:"165 cm"},
    {nama: "Jasmine", tinggi:"161 cm"},
    {nama: "Violet", tinggi:"159 cm"}
]

for (let i=0; i<tinggiBadan.length; i++){
    console.log(tinggiBadan[i].nama + " Memiliki tinggi " + tinggiBadan[i].tinggi);
}

tinggiBadan.sort(function(a, b){
    return a.nama.localeCompare(b.nama);
})

for (let i=0; i<tinggiBadan.length; i++){
    console.log(tinggiBadan[i].nama + " : " + tinggiBadan[i].tinggi)
}