DROP DATABASE IF EXISTS number;

CREATE DATABASE number;

USE number;

CREATE TABLE
    numbers (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        number INT NOT NULL
    );

INSERT INTO numbers (number) VALUES (1),(10),(11),(111);