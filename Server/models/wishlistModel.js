const pool = require('./db');

const getWishlistByUserId = async (userId) => {
  const wishlistQuery = 'SELECT p_id FROM wishlist WHERE u_id = $1';
  const wishlistResult = await pool.query(wishlistQuery, [userId]);
  const productIds = wishlistResult.rows.map(row => row.p_id);

  if (productIds.length === 0) {
    return [];
  }

  const productQuery = `SELECT p_id, p_name, p_category, p_weight, p_image_id FROM product WHERE p_id = ANY($1::int[])`;
  const productResult = await pool.query(productQuery, [productIds]);
  const products = productResult.rows;

  const imageIds = products.map(product => product.p_image_id);
  const imageQuery = `SELECT id, file_name, file_data FROM image WHERE id = ANY($1::int[])`;
  const imageResult = await pool.query(imageQuery, [imageIds]);
  const images = imageResult.rows;

  const productsWithImages = products.map(product => {
    const image = images.find(img => img.id === product.p_image_id);
    return {
      ...product,
      image: image ? `data:image/jpeg;base64,${image.file_data.toString('base64')}` : null,
    };
  });

  return productsWithImages;
};

const addToWishlist = async (u_id, p_id) => {
  const checkQuery = 'SELECT * FROM wishlist WHERE u_id = $1 AND p_id = $2';
  const checkResult = await pool.query(checkQuery, [u_id, p_id]);

  if (checkResult.rows.length > 0) {
    const deleteQuery = 'DELETE FROM wishlist WHERE u_id = $1 AND p_id = $2';
    await pool.query(deleteQuery, [u_id, p_id]);
  }

  const insertQuery = 'INSERT INTO wishlist (u_id, p_id) VALUES ($1, $2)';
  await pool.query(insertQuery, [u_id, p_id]);

  return { message: 'Item added to wishlist successfully' };
};

const deleteFromWishlist = async (userId, productId) => {
  const deleteQuery = 'DELETE FROM wishlist WHERE u_id = $1 AND p_id = $2';
  await pool.query(deleteQuery, [userId, productId]);
  return { message: 'Item deleted from wishlist successfully' };
};

module.exports = { getWishlistByUserId, addToWishlist, deleteFromWishlist };
