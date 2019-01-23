const express = require('express');
const router = express.Router();
const axios = require('axios');


 // <<<<<<< HEAD
// =======

 // >>>>>>> aa7b647e22c866ed5fde61cc0dc4e34e895d9017
var recipe = require("../models/recipemodel");


router.get("/", function (req, res) {
res.render("index");
});

 router.get("/index-guest", function (req, res) {
    res.render("indexguest");
});

 router.get("/index-login/", function (req, res) {
    res.render("indexlogin");
});

 router.get("/index-login/recipeAPI", function (req, res) {
    res.render("recipeAPI");
});

 router.get("/index-login/recipeDB", function (req, res) {
    res.render("recipeDB");
});

 router.get("/index-login/recipe-input", function (req, res) {
    res.render("recipeinput");
});

 router.get("/index-login/shopping-list", function (req, res) {
    res.render("list");
});

 router.get("/index-guest/recipeAPI-guest", function (req, res) {
    res.render("recipeAPIguest");
});

 router.get("/index-guest/recipeDB-guest", function (req, res) {
    res.render("recipeDBguest");
});


const api_key = process.env.API_KEY;


const queryURL = "https://api.edamam.com/search?q=&app_id=e3c21f1d&app_key=3e40f04f482e04daac9d6917ba78643f&from=0&to=3&calories=591-722";
const displayRecipes = () => {
axios.get(queryURL).then((response) => {
	        // console.log(response.data.hits[0].recipe);
const data = response.data.hits[0].recipe;


            // output = space + header + space + space
            // space + "Name           :" + data.label +
            //     space + "source         :" + data.uri +
            //     space + "Ingredients    :" + data.ingredients;

         // <<<<<<< HEAD
            // console.log(output);	

         //             // console.log(output);
 
        
        
        console.log(response.data.hits[0].recipe.label);
        console.log(response.data.hits[0].recipe.ingredientLines);
        console.log(response.data.hits[0].recipe.totalTime);
        console.log(response.data.hits[0].recipe.uri); //instructions
        console.log(response.data.hits[0].recipe.image);
        console.log(response.data.hits[0].recipe.healthLabels);
        console.log(response.data.hits[0].recipe.dietLabels);
        console.log(response.data.hits[0].recipe.calories);

     });
};
displayRecipes();

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