import express from "express";
import {getAllBarang, getBarangById, createBarang, updateBarang, deleteBarang} from "../controller/barangController.js"
const router = express.Router();

router.get('/barang',getAllBarang);
router.get('/barang/:id',getBarangById);
router.post('/barang',createBarang);
router.put('/barang/:id',updateBarang);
router.delete('/barang/:id',deleteBarang);

export default router;