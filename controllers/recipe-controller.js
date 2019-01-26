const express = require('express');
const router = express.Router();

// Display recipes from db to home
var recipe = require("../models/recipemodel");

router.get('/', (req, res) => {
    recipe.all((data) => {
        let hbsObject = {
            recipes: data
        };
        console.log('yay')
        console.log(hbsObject)
        res.render("index", hbsObject);
    });
});

// Show recipes by pictures, page before recipe search
router.get("/showrecipe", (req, res) => {
    res.render("showrecipe");
});

// Page where user can write their recipe and submit an image
router.get("/addrecipe", (req, res) => {
    res.render("addrecipe");
});

// Ingredients can be added to the list from recipes
router.get("/list", (req, res) => {
    res.render("list");
});

// Add Recipe Page
router.post('/', (req, res) => {
    recipe.create(['label', 'ing_1','ing_2','ing_3','ing_4', 'ing_5','ing_6','ing_7','ing_8', 'totalTime', 'instructions_uri', 'image', 'dietLabels', 'allergies', 'calories'
    ], [
        req.body.label, req.body.ing1, req.body.ing2, req.body.ing3, req.body.ing4, req.body.ing5, req.body.ing6, req.body.ing7, req.body.ing8, req.body.totalTime, req.body.instruction, req.body.imageLink, req.body.dietLabels, req.body.allergies, req.body.calories
    ],
    (data) => {
        res.redirect('/');
    })
});

// Exporting router 
module.exports = router;