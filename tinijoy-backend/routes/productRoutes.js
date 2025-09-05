//把前端请求分发给对应的productController函数
const express = require('express');
const router = express.Router();
const { createProduct, getProducts, updateProduct, deleteProduct, getProductById } = require('../controllers/productController');

router.get('/:id', getProductById);
router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
