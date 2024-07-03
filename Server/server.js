// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { Pool } = require("pg");

// // Create a new express application instance
// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // PostgreSQL connection setup
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "SaptosiDB",
//   // password: "#Taylor@13",
//   password: 'root123',
//   port: 5432,
// });


// // Route to handle account creation
// app.post("/create-account", async (req, res) => {
//   const { userName, phoneNumber, email } = req.body;

//   try {
//     const result = await pool.query(
//       "INSERT INTO users (u_name, ph_no, email) VALUES ($1, $2, $3) RETURNING *",
//       [userName, phoneNumber, email]
//     );
//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Route to fetch user details by phone number
// app.get("/get-user/:phoneNumber", async (req, res) => {
//   const { phoneNumber } = req.params;

//   try {
//     const result = await pool.query("SELECT * FROM users WHERE ph_no = $1", [
//       phoneNumber,
//     ]);
//     if (result.rows.length === 0) {
//       res.status(404).json({ error: "User not found" });
//     } else {
//       res.status(200).json(result.rows[0]);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Route to update user details
// app.put("/update-user", async (req, res) => {
//   const { userName, phoneNumber, email, address } = req.body;

//   try {
//     const result = await pool.query(
//       "UPDATE users SET u_name = $1, email = $2, addr = $3 WHERE ph_no = $4 RETURNING *",
//       [userName, email, address, phoneNumber]
//     );
//     if (result.rows.length === 0) {
//       res.status(404).json({ error: "User not found" });
//     } else {
//       res.status(200).json(result.rows[0]);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.get('/api/wishlist/:userId', async (req, res) => {
//   const userId = req.params.userId;

//   try {
//     // Fetch wishlist items
//     const wishlistQuery = 'SELECT p_id FROM wishlist WHERE u_id = $1';
//     const wishlistResult = await pool.query(wishlistQuery, [userId]);
//     const productIds = wishlistResult.rows.map(row => row.p_id);

//     if (productIds.length === 0) {
//       return res.json([]);
//     }

//     // Fetch product details
//     const productQuery = `
//       SELECT p_id, p_name, p_category, p_weight, p_image_id
//       FROM product
//       WHERE p_id = ANY($1::int[])
//     `;
//     const productResult = await pool.query(productQuery, [productIds]);
//     const products = productResult.rows;

//     // Fetch image details
//     const imageIds = products.map(product => product.p_image_id);
//     const imageQuery = `
//       SELECT id, file_name, file_data
//       FROM image
//       WHERE id = ANY($1::int[])
//     `;
//     const imageResult = await pool.query(imageQuery, [imageIds]);
//     const images = imageResult.rows;

//     // Map products to their images
//     const productsWithImages = products.map(product => {
//       const image = images.find(img => img.id === product.p_image_id);
//       return {
//         ...product,
//         image: image ? `data:image/jpeg;base64,${image.file_data.toString('base64')}` : null,
//       };
//     });
    
//     res.json(productsWithImages);
//   } catch (error) {
//     console.error('Error fetching wishlist:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.get('/api/cart/:userId', async (req, res) => {
//   const userId = req.params.userId;

//   try {
//     // Fetch cart items with quantity
//     const cartQuery = 'SELECT p_id, quantity FROM cart WHERE u_id = $1';
//     const cartResult = await pool.query(cartQuery, [userId]);
//     const cartItems = cartResult.rows;

//     if (cartItems.length === 0) {
//       return res.json([]);
//     }

//     // Fetch product details
//     const productIds = cartItems.map(item => item.p_id);
//     const productQuery = `
//       SELECT p_id, p_name, p_category, p_weight, p_image_id
//       FROM product
//       WHERE p_id = ANY($1::int[])
//     `;
//     const productResult = await pool.query(productQuery, [productIds]);
//     const products = productResult.rows;

//     // Fetch image details
//     const imageIds = products.map(product => product.p_image_id);
//     const imageQuery = `
//       SELECT id, file_name, file_data
//       FROM image
//       WHERE id = ANY($1::int[])
//     `;
//     const imageResult = await pool.query(imageQuery, [imageIds]);
//     const images = imageResult.rows;

//     // Map products to their images and quantities
//     const productsWithDetails = products.map(product => {
//       const image = images.find(img => img.id === product.p_image_id);
//       const cartItem = cartItems.find(item => item.p_id === product.p_id);
//       return {
//         ...product,
//         image: image ? `data:image/jpeg;base64,${image.file_data.toString('base64')}` : null,
//         quantity: cartItem ? cartItem.quantity : null,
//       };
//     });
    
//     res.json(productsWithDetails);
//   } catch (error) {
//     console.error('Error fetching cart:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Route to delete item from wishlist by userId and productId
// app.delete("/api/wishlist/:userId/:productId", async (req, res) => {
//   const { userId, productId } = req.params;

//   try {
//     // Perform DELETE operation
//     const deleteQuery = "DELETE FROM wishlist WHERE u_id = $1 AND p_id = $2";
//     await pool.query(deleteQuery, [userId, productId]);

//     res.status(200).json({ message: "Item deleted from wishlist successfully" });
//   } catch (error) {
//     console.error("Error deleting item from wishlist:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Route to delete item from cart by userId and productId
// app.delete("/api/cart/:userId/:productId", async (req, res) => {
//   const { userId, productId } = req.params;

//   try {
//     // Perform DELETE operation
//     const deleteQuery = "DELETE FROM cart WHERE u_id = $1 AND p_id = $2";
//     await pool.query(deleteQuery, [userId, productId]);

//     res.status(200).json({ message: "Item deleted from wishlist successfully" });
//   } catch (error) {
//     console.error("Error deleting item from wishlist:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Route to fetch products by category
// app.get('/api/products/:category', async (req, res) => {
//   const { category } = req.params;
//   const normalizedCategory = category.charAt(0) + category.slice(1).toLowerCase(); // Capitalize the first letter

//   try {
//     // Fetch product details by category
//     let productQuery
//     let productResult
//     if (normalizedCategory == 'All'){
//         productQuery = `
//          SELECT p_id, p_name, p_category, p_weight, p_image_id
//         FROM product`;
//         productResult = await pool.query(productQuery);
//     }
//     else{
//       productQuery = `
//         SELECT p_id, p_name, p_category, p_weight, p_image_id
//         FROM product
//         WHERE LOWER(p_category) = LOWER($1)
//       `;
//        productResult = await pool.query(productQuery, [normalizedCategory]);
      
//     }
//     const products = productResult.rows;

//     // Fetch image details
//     const imageIds = products.map(product => product.p_image_id);
//     const imageQuery = `
//       SELECT id, file_name, file_data
//       FROM image
//       WHERE id = ANY($1::int[])
//     `;
//     const imageResult = await pool.query(imageQuery, [imageIds]);
//     const images = imageResult.rows;

//     // Map products to their images
//     const productsWithImages = products.map(product => {
//       const image = images.find(img => img.id === product.p_image_id);
//       return {
//         ...product,
//         image: image ? `data:image/jpeg;base64,${image.file_data.toString('base64')}` : null,
//       };
//     });
    
//     res.json(productsWithImages);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Route to add an item to the wishlist, replacing existing item if found
// app.post('/api/wishlist', async (req, res) => {
//   const { u_id, p_id } = req.body;

//   try {
//     // Check if the item already exists in the wishlist
//     const checkQuery = 'SELECT * FROM wishlist WHERE u_id = $1 AND p_id = $2';
//     const checkResult = await pool.query(checkQuery, [u_id, p_id]);
    
//     if (checkResult.rows.length > 0) {
//       // Item already exists, delete it first
//       const deleteQuery = 'DELETE FROM wishlist WHERE u_id = $1 AND p_id = $2';
//       const deleteResult = await pool.query(deleteQuery, [u_id, p_id]);
//     }
//     else{
//       // Add item to the wishlist
//       const insertQuery = 'INSERT INTO wishlist (u_id, p_id) VALUES ($1, $2)';
//       await pool.query(insertQuery, [u_id, p_id]);
//     }
//     res.status(200).json({ message: 'Item added to wishlist successfully' });
//   } catch (error) {
//     console.error('Error adding item to wishlist:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Route to add an item to the wishlist, replacing existing item if found
// app.post('/api/cart', async (req, res) => {
//   const { u_id, p_id, quantity } = req.body;
//   // Check if the item already exists in the wishlist
//   const checkQuery = 'SELECT * FROM cart WHERE u_id = $1 AND p_id = $2';
//   const checkResult = await pool.query(checkQuery, [u_id, p_id]);
  
//   if (checkResult.rows.length > 0) {
//     res.status(200).json({message: 'Item already added to cart'})
//   }
//   else{
//     try {
//       // Add item to the wishlist
//       const insertQuery = 'INSERT INTO cart (u_id, p_id, quantity) VALUES ($1, $2, $3)';
//       await pool.query(insertQuery, [u_id, p_id, quantity]);

//       res.status(200).json({ message: 'Item added to cart' });
//     } catch (error) {
//       console.error('Error adding item to cart:', error);
//       res.status(500).json({ error :'Internal Server Error' });
//     }
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const app = require("./app");
const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
