const express = require('express');
const router = express.Router();

var recipe = require("../models/recipemodel");

// Landing page
router.get("/", (req, res) => {
    res.render("index");
});

// Home Page featuring recipes from users
router.get("/home", (req, res) => {
    res.render("home");
});

// What to cook feature lets user click a random button to get a randomized recipe suggestion
router.get("/random", (req, res) => {
    res.render("random");
});

// Displaying recipes by queries
router.get("/search", (req, res) => {
    res.render("search");
});

// Page where user can write their recipe and submit an image
router.get("/addrecipe", (req, res) => {
    res.render("add_recipe");
});

// Ingredients can be added to the list from recipes
router.get("/shoppinglist", (req, res) => {
    res.render("shopping_list");
});

// Api submission from users
router.get("/recipes", (req, res) => {
    res.render("");
});

// Display recipes from db to home
// router.get('/home', (req, res) => {
//     recipe.all((data) => {
//         let hbsObject = {
//             recipe: data
//         };
//         res.render('home', hbsObject)
//     });
// });

// Exporting router 
module.exports = router;