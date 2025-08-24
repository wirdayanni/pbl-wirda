import express from "express";  //ambil framework Express untuk membuat server HTTP.
import cors from "cors";        //ambil middleware CORS supaya server bisa diakses dari domain/port berbeda
import dotenv from "dotenv";    //ambil library dotenv untuk membaca konfigurasi dari file .env

dotenv.config();                //Membaca file .env

const app=express();            //Membuat variabel app dengan memanggil fungsi express() untuk memudahkan pemanggilan method yang ada fungsi express

app.use(cors());
app.use(express.json());

const PORT = 8000;
app.listen(PORT,() => {
    console.log("Server berjalan.....");
})