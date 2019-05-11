CREATE DATABASE database_links;

USE database_links;

-- USERS TABLE
CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(60) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    PRIMARY KEY(id, username)
);

DESCRIBE users;

-- LINKS TABLE
CREATE TABLE links (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);
