<<<<<<< Updated upstream
CREATE DATABASE recipes_db;
USE recipes_db;
=======
DROP DATABASE IF EXISTS recipe_db;
CREATE DATABASE recipe_db;
USE recipe_db;
>>>>>>> Stashed changes

CREATE TABLE recipes (
    id INT NOT NULL AUTO_INCREMENT,
    label VARCHAR(30) NOT NULL,
    ingredientLines VARCHAR(255) NOT NULL,
    totalTime INT NOT NULL,
    instructions_uri VARCHAR(30) NOT NULL, 
    image VARCHAR(30) NOT NULL,
    healthLabels VARCHAR(30) NOT NULL,
    dietLabels VARCHAR(30) NOT NULL,
    calories INT(30),
    comments VARCHAR(150),
    ratings INT,
    PRIMARY KEY (id)
);

CREATE TABLE ingredient_lines (
    recipe_id INT NOT NULL AUTO_INCREMENT,
    label VARCHAR(30) NOT NULL,
<<<<<<< Updated upstream
    ing_1 VARCHAR(200) NOT NULL,
    ing_2 VARCHAR(200) NOT NULL,
    ing_3 VARCHAR(200) NOT NULL,
    ing_4 VARCHAR(200) NOT NULL,
    ing_5 VARCHAR(200) NOT NULL,
    ing_6 VARCHAR(200) NOT NULL,
    ing_7 VARCHAR(200) NOT NULL,
    ing_8 VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
=======
    ing_1 VARCHAR(255) NOT NULL,
    ing_2 VARCHAR(255) NOT NULL,
    ing_3 VARCHAR(255) NOT NULL,
    ing_4 VARCHAR(255) NOT NULL,
    ing_5 VARCHAR(255) NOT NULL,
    ing_6 VARCHAR(255) NOT NULL,
    ing_7 VARCHAR(255) NOT NULL,
    ing_8 VARCHAR(255) NOT NULL,
    PRIMARY KEY (recipe_id)
>>>>>>> Stashed changes
);

CREATE TABLE comments_ratings (
    recipe_id INT AUTO_INCREMENT,
    comments VARCHAR(300),
    ratings INT,
    PRIMARY KEY (id)
);