const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/get-cart/:userId', cartController.getCartByUserId);
router.post('/add-item', cartController.addToCart);
router.delete('/delete-item/:userId/:productId', cartController.deleteFromCart);

module.exports = router;
