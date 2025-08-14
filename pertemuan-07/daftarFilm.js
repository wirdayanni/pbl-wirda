const fs = require("fs");

const teks = fs.readFileSync("film.json", "utf-8");
const film = JSON.parse(teks);

// film.push({judul: "Agak Laen", tahun:2024, genre:"Horor, Komedi"})
// film.push({judul: "Habibie & Ainun", tahun:2012, genre:"Drama, Romantis"})
// film.push({judul: "Dilan 1998", tahun:2018, genre:"Romantis"})

// film.pop();

fs.writeFileSync("film.json", JSON.stringify(film, null, 2));

console.log("Daftar Film:")

no = 1;
for (let i = 0; i < film.length; i++) {
    console.log(no + ". " + film[i].judul + " (" + film[i].tahun + ") - " + film[i].genre);
    no++;
}                                  