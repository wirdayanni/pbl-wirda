import express from "express";  //ambil framework Express untuk membuat server HTTP.
import cors from "cors";        //ambil middleware CORS supaya server bisa diakses dari domain/port berbeda
import dotenv from "dotenv";    //ambil library dotenv untuk membaca konfigurasi dari file .env
import barangRoutes from "./routes/barangRoutes.js";

dotenv.config();                //Membaca file .env

const app=express();            //Membuat variabel app dengan memanggil fungsi express() untuk memudahkan pemanggilan method yang ada fungsi express

app.use(cors());                //Memanggil fungsi cors dari module cors sebagai middleware dengan method use untuk dipasang di express melalui variabel app
app.use(express.json());        //Memanggil fungsi json dari module express dengan method use sebagai middleware dari Express untuk otomatis membaca request body yang dikirim dalam format JSON.
app.use(barangRoutes);          //Memasang middleware router (barangRoutes) ke dalam app (express) agar semua endpoint yang ada di dalam barangRoutes otomatis aktif di server utama.

const PORT = 8000;
app.listen(PORT,() => {          // Memanggil method dari objek app (instance Express) untuk menyalakan server dan mendengarkan request di port. Berisi parameter PORT dan callback function (fungsi yang dipanggil setelah sesuatu berhasil dilakukan). Callback ini dipanggil ketika server sudah berhasil buka di port tersebut.
       console.log("Server berjalan.....");
})