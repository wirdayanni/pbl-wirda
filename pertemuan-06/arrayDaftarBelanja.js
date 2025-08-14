let daftarBelanja =[];

daftarBelanja.push("Beras", "Minyak", "Gula");
console.log(daftarBelanja);
daftarBelanja.push("Telur", "Sayur", "Buah");
console.log(daftarBelanja);

daftarBelanja.splice(daftarBelanja.indexOf("Minyak"),1);
console.log(daftarBelanja);

daftarBelanja.sort()
for(i=0; i<daftarBelanja.length; i++){
    console.log((i+1)+". " + daftarBelanja[i]);
}