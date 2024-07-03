const pool = require('./db');

const getProductsByCategory = async (category) => {
  let productQuery;
  let productResult;

  if (category.toLowerCase() === 'all') {
    productQuery = `SELECT p_id, p_name, p_category, p_weight, p_image_id FROM product`;
    productResult = await pool.query(productQuery);
  } else {
    productQuery = `SELECT p_id, p_name, p_category, p_weight, p_image_id FROM product WHERE LOWER(p_category) = LOWER($1)`;
    productResult = await pool.query(productQuery, [category]);
  }

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

module.exports = { getProductsByCategory };
