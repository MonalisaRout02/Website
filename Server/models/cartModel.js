const pool = require('./db');

const getCartByUserId = async (userId) => {
  const cartQuery = 'SELECT p_id, quantity FROM cart WHERE u_id = $1';
  const cartResult = await pool.query(cartQuery, [userId]);
  const cartItems = cartResult.rows;

  if (cartItems.length === 0) {
    return [];
  }

  const productIds = cartItems.map(item => item.p_id);
  const productQuery = `SELECT p_id, p_name, p_category, p_weight, p_image_id FROM product WHERE p_id = ANY($1::int[])`;
  const productResult = await pool.query(productQuery, [productIds]);
  const products = productResult.rows;

  const imageIds = products.map(product => product.p_image_id);
  const imageQuery = `SELECT id, file_name, file_data FROM image WHERE id = ANY($1::int[])`;
  const imageResult = await pool.query(imageQuery, [imageIds]);
  const images = imageResult.rows;

  const productsWithDetails = products.map(product => {
    const image = images.find(img => img.id === product.p_image_id);
    const cartItem = cartItems.find(item => item.p_id === product.p_id);
    return {
      ...product,
      image: image ? `data:image/jpeg;base64,${image.file_data.toString('base64')}` : null,
      quantity: cartItem ? cartItem.quantity : null,
    };
  });

  return productsWithDetails;
};

const addToCart = async (u_id, p_id, quantity) => {
  const checkQuery = 'SELECT * FROM cart WHERE u_id = $1 AND p_id = $2';
  const checkResult = await pool.query(checkQuery, [u_id, p_id]);

  if (checkResult.rows.length > 0) {
    return { message: 'Item already added to cart' };
  } else {
    const insertQuery = 'INSERT INTO cart (u_id, p_id, quantity) VALUES ($1, $2, $3)';
    await pool.query(insertQuery, [u_id, p_id, quantity]);
    return { message: 'Item added to cart' };
  }
};

const deleteFromCart = async (userId, productId) => {
  const deleteQuery = 'DELETE FROM cart WHERE u_id = $1 AND p_id = $2';
  await pool.query(deleteQuery, [userId, productId]);
  return { message: 'Item deleted from cart successfully' };
};

module.exports = { getCartByUserId, addToCart, deleteFromCart };
