const cartModel = require('../models/cartModel');

exports.getCartByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await cartModel.getCartByUserId(userId);
    res.status(200).json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.addToCart = async (req, res) => {
  const { u_id, p_id, quantity } = req.body;

  try {
    const result = await cartModel.addToCart(u_id, p_id, quantity);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteFromCart = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    const result = await cartModel.deleteFromCart(userId, productId);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
