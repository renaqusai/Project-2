const express = require('express');
const router = express.Router();

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

// Show recipes by pictures, page before recipe search
router.get("/showrecipe", (req, res) => {
    res.render("showrecipe");
});

// Displaying recipes by queries
router.get("/search", (req, res) => {
    res.render("recipesearch");
});

// Page where user can write their recipe and submit an image
router.get("/addrecipe", (req, res) => {
    res.render("addrecipe");
});

// Ingredients can be added to the list from recipes
router.get("/shoppinglist", (req, res) => {
    res.render("list");
});

// Api submission from users
router.get("/recipes", (req, res) => {
    res.render("");
});

// Exporting router 
module.exports = router;