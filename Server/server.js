const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");

// Create a new express application instance
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PostgreSQL connection setup
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "SaptosiDB",
  password: "root123",
  port: 5432,
});

// Route to handle account creation
app.post("/create-account", async (req, res) => {
  const { userName, phoneNumber, email } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO users (u_name, ph_no, email) VALUES ($1, $2, $3) RETURNING *",
      [userName, phoneNumber, email]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to fetch user details by phone number
app.get("/get-user/:phoneNumber", async (req, res) => {
  const { phoneNumber } = req.params;

  try {
    const result = await pool.query("SELECT * FROM users WHERE ph_no = $1", [
      phoneNumber,
    ]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to update user details
app.put("/update-user", async (req, res) => {
  const { userName, phoneNumber, email, address } = req.body;

  try {
    const result = await pool.query(
      "UPDATE users SET u_name = $1, email = $2, addr = $3 WHERE ph_no = $4 RETURNING *",
      [userName, email, address, phoneNumber]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/api/wishlist/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    // Fetch wishlist items
    const wishlistQuery = 'SELECT p_id FROM wishlist WHERE u_id = $1';
    const wishlistResult = await pool.query(wishlistQuery, [userId]);
    const productIds = wishlistResult.rows.map(row => row.p_id);

    if (productIds.length === 0) {
      return res.json([]);
    }

    // Fetch product details
    const productQuery = `
      SELECT p_id, p_name, p_category, p_weight, p_image_id
      FROM product
      WHERE p_id = ANY($1::int[])
    `;
    const productResult = await pool.query(productQuery, [productIds]);
    const products = productResult.rows;

    // Fetch image details
    const imageIds = products.map(product => product.p_image_id);
    const imageQuery = `
      SELECT id, file_name, file_data
      FROM image
      WHERE id = ANY($1::int[])
    `;
    const imageResult = await pool.query(imageQuery, [imageIds]);
    const images = imageResult.rows;

    // Map products to their images
    const productsWithImages = products.map(product => {
      const image = images.find(img => img.id === product.p_image_id);
      return {
        ...product,
        image: image ? `data:image/jpeg;base64,${image.file_data.toString('base64')}` : null,
      };
    });
    
    res.json(productsWithImages);
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/cart/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    // Fetch cart items
    const cartQuery = 'SELECT p_id FROM cart WHERE u_id = $1';
    const cartResult = await pool.query(cartQuery, [userId]);
    const productIds = cartResult.rows.map(row => row.p_id);

    if (productIds.length === 0) {
      return res.json([]);
    }

    // Fetch product details
    const productQuery = `
      SELECT p_id, p_name, p_category, p_weight, p_image_id
      FROM product
      WHERE p_id = ANY($1::int[])
    `;
    const productResult = await pool.query(productQuery, [productIds]);
    const products = productResult.rows;

    // Fetch image details
    const imageIds = products.map(product => product.p_image_id);
    const imageQuery = `
      SELECT id, file_name, file_data
      FROM image
      WHERE id = ANY($1::int[])
    `;
    const imageResult = await pool.query(imageQuery, [imageIds]);
    const images = imageResult.rows;

    // Map products to their images
    const productsWithImages = products.map(product => {
      const image = images.find(img => img.id === product.p_image_id);
      return {
        ...product,
        image: image ? `data:image/jpeg;base64,${image.file_data.toString('base64')}` : null,
      };
    });
    
    res.json(productsWithImages);
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete item from wishlist by userId and productId
app.delete("/api/wishlist/:userId/:productId", async (req, res) => {
  const { userId, productId } = req.params;

  try {
    // Perform DELETE operation
    const deleteQuery = "DELETE FROM wishlist WHERE u_id = $1 AND p_id = $2";
    await pool.query(deleteQuery, [userId, productId]);

    res.status(200).json({ message: "Item deleted from wishlist successfully" });
  } catch (error) {
    console.error("Error deleting item from wishlist:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to delete item from cart by userId and productId
app.delete("/api/cart/:userId/:productId", async (req, res) => {
  const { userId, productId } = req.params;

  try {
    // Perform DELETE operation
    const deleteQuery = "DELETE FROM cart WHERE u_id = $1 AND p_id = $2";
    await pool.query(deleteQuery, [userId, productId]);

    res.status(200).json({ message: "Item deleted from wishlist successfully" });
  } catch (error) {
    console.error("Error deleting item from wishlist:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
