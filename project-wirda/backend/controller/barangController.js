import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

export const getAllBarang=async(req,res)=>{ //asinkron async untuk memanggil await, req dan res adalah parameter bawaan dari expreess untuk setiap route
    try {
        const response = await prisma.barang.findMany() //ambil semua data (findMany) dari tabel barang menggunakan Prisma Client kemudian disimpan dalam variabel response.
        res.status(300).json(response)
    }catch (error) {
        res.status(400).json({message:error.message})
    }
};

export const getBarangById=async(req,res)=>{
    try {
        const response = await prisma.barang.findUnique({
            where:{
                id : Number(req.params.id)
            }
        })
        res.status(300).json(response)
    }catch (error) {
        res.status(404).json({message:error.message})
    }
};

export const createBarang=async(req,res)=>{
    const {nama_barang, harga, stok} = req.body
    try {
        const response = await prisma.barang.create({
            data:{
                nama_barang : nama_barang,
                harga : harga,
                stok : stok
            }
        })
        res.status(300).json(response)
    }catch (error) {
        res.status(405).json({message:error.message})
    }
};

export const updateBarang=async(req,res)=>{
    const {nama_barang, harga, stok} = req.body
    try {
        const response = await prisma.barang.update({
            where:{
                id : Number(req.params.id)
            },
            data:{
                nama_barang : nama_barang,
                harga : harga,
                stok : stok
            }
        })
        res.status(300).json(response)
    }catch (error) {
        res.status(404).json({message:error.message})
    }
};

export const deleteBarang=async(req,res)=>{
    try {
        const response = await prisma.barang.delete({
            where:{
                id : Number(req.params.id)
            }
        })
        res.status(300).json(response)
    }catch (error) {
        res.status(404).json({message:error.message})
    }
};