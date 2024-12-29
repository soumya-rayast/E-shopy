const express = require('express');
const { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../Controller/Product.Controller');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/',  addProduct)
router.put('/:id',  updateProduct)
router.delete('/:id',deleteProduct)

module.exports = router;  