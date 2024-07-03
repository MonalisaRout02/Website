--create DB--
CREATE DATABASE SaptosiDB;

--user table--
CREATE TABLE users (
    u_id SERIAL PRIMARY KEY,
    u_name TEXT NOT NULL,
    ph_no TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    addr TEXT
);

--category table--
CREATE TABLE category (
    cat_id SERIAL PRIMARY KEY,
    cat_name TEXT NOT NULL UNIQUE,
    cat_prod_count INTEGER NOT NULL
);

--image table--
CREATE TABLE image (
    id SERIAL PRIMARY KEY,
    file_name TEXT NOT NULL,
    file_data BYTEA,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--product table--
CREATE TABLE product (
    p_id SERIAL PRIMARY KEY,
    p_name TEXT NOT NULL,
    p_category TEXT NOT NULL REFERENCES category(cat_name),
    p_weight NUMERIC,
    p_image_id INTEGER NOT NULL REFERENCES image(id)
);

--wislist table--
CREATE TABLE wishlist(
	u_id INTEGER NOT NULL REFERENCES users(u_id),
	p_id INTEGER NOT NULL REFERENCES product(p_id)
);

--cart table--
CREATE TABLE cart (
    u_id INTEGER NOT NULL REFERENCES users(u_id),
    p_id INTEGER NOT NULL REFERENCES product(p_id),
    quantity INTEGER,
    CONSTRAINT pk_cart PRIMARY KEY (u_id, p_id)
);

--rating table--
CREATE TABLE rating (
    u_id INTEGER NOT NULL REFERENCES users(u_id),
    p_id INTEGER NOT NULL REFERENCES product(p_id),
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5)
);

--order table--
CREATE TABLE orders (
    o_id SERIAL PRIMARY KEY,
    u_id INTEGER NOT NULL REFERENCES users(u_id),
    p_id INTEGER NOT NULL REFERENCES product(p_id),
    UNIQUE (o_id)  -- Ensure o_id is unique for each order--
);