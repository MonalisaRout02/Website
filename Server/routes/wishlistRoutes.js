const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');

router.get('/get-wishlist/:userId', wishlistController.getWishlistByUserId);
router.post('/add-item', wishlistController.addToWishlist);
router.delete('/delete-item/:userId/:productId', wishlistController.deleteFromWishlist);

module.exports = router;
