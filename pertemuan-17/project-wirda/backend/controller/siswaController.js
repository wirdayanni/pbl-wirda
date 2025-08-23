import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

export const getAllSiswa =async(req, res) => {
    try {
        const response = await prisma.datasiswa.findMany();
        res.status(200).json(response);
    }catch (error)  {
        res.status(400).json({message:error.message});
    }
}

export const getSiswaById =async(req, res) => {
    try {
        const response = await prisma.datasiswa.findUnique({
            where:{
                id:Number(req.params.id)
            }
        });
        res.status(200).json(response);
    }catch (error)  {
        res.status(400).json({message:error.message});
    }
};

export const createSiswa =async(req, res) => {
    const {nama, Umur} = req.body
    try {
        const response = await prisma.datasiswa.create({
            data:{
                nama: nama,
                Umur: Umur
            }
        })
        res.status(200).json(response)
    }catch (error)  {
        res.status(400).json({message:error.message})
    }
};

export const updateSiswa =async(req, res) => {
    const {nama, Umur} = req.body
    try {
        const response = await prisma.datasiswa.update({
            where:{
                id:Number(req.params.id)
            },
            data:{
                nama: nama,
                Umur: Umur
            }
        })
        res.status(200).json(response)
    }catch (error)  {
        res.status(400).json({message:error.message})
    }
};

export const deleteSiswa =async(req, res) => {
    try {
        const response = await prisma.datasiswa.delete({
            where:{
                id:Number(req.params.id)
            }
        });
        res.status(200).json(response);
    }catch (error)  {
        res.status(400).json({message:error.message});
    }
};