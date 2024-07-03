const productModel = require('../models/productModel');

exports.getProductsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const products = await productModel.getProductsByCategory(category);
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
