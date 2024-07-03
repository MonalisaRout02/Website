const wishlistModel = require('../models/wishlistModel');

exports.getWishlistByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await wishlistModel.getWishlistByUserId(userId);
    res.status(200).json(wishlist);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.addToWishlist = async (req, res) => {
  const { u_id, p_id } = req.body;

  try {
    const result = await wishlistModel.addToWishlist(u_id, p_id);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteFromWishlist = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    const result = await wishlistModel.deleteFromWishlist(userId, productId);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
