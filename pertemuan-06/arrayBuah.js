let namaBuah = [];

namaBuah.push("Apel", "Mangga", "Jeruk", "Semangka", "Pisang", "Anggur", "Nanas");

console.log(namaBuah);

namaBuah.sort();
console.log(namaBuah);

for (let i=0; i<namaBuah.length; i++){
    console.log((i+1) + ". " + namaBuah[i]);
}