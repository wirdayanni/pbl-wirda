const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/', userController.createUser)
router.get('/', userController.getAllUsers);
router.get('/', userController.getUserByID);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;