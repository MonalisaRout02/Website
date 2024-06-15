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

--product table--
CREATE TABLE product (
    p_id SERIAL PRIMARY KEY,
    p_name TEXT NOT NULL,
    p_category TEXT NOT NULL REFERENCES category(cat_name),
    p_weight NUMERIC,
    p_image_id INTEGER REFERENCES image(id)
);

--image table--
CREATE TABLE image (
    id SERIAL PRIMARY KEY,
    file_name TEXT NOT NULL,
    file_data BYTEA,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);