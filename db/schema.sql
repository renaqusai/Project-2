CREATE DATABASE recipe_db;
USE recipe_db;

CREATE TABLE recipes (
    id INT AUTO_INCREMENT,
    label VARCHAR(30) NOT NULL,
    ing_1 VARCHAR(200),
    totalTime INT NOT NULL,
    instructions_uri VARCHAR(400) NOT NULL, 
    image VARCHAR(30) NOT NULL,
    dietLabels VARCHAR(30) NOT NULL,
    allergies VARCHAR(30) NOT NULL,
    calories INT(30),
    PRIMARY KEY (id)
);
