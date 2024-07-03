const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/:category', productController.getProductsByCategory);

module.exports = router;
