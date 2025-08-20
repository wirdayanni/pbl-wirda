const controller=require('../controllers/controllersProduct.js');
const express=require('express');
const router=express.Router(); 

router.get('/', controller.getAllProducts);
router.get('/:id', controller.getAllProductsById);
router.post('/', controller.createProduct);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;