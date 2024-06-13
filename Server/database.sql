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