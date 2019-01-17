const express = require('express');
const router = express.Router();
const axios = require('axios');


var recipe = require("../models/recipemodel");

router.get("/", function(req, res) {
      res.render("index");
    });

const api_key = process.env.API_KEY;


const queryURL ="https://api.edamam.com/search?q=&app_id=e3c21f1d&app_key=3e40f04f482e04daac9d6917ba78643f&from=0&to=3&calories=591-722";
const displayRecipes = () => {
    axios.get(queryURL).then((response) => {
            // console.log(response.data.hits[0].recipe);
            const data = response.data.hits[0].recipe;

            // output = space + header + space + space
            // space + "Name           :" + data.label +
            //     space + "source         :" + data.uri +
            //     space + "Ingredients    :" + data.ingredients;

            // console.log(output);

            
            console.log(response.data.hits[0].recipe.label);
            console.log(response.data.hits[0].recipe.ingredientLines);
            console.log(response.data.hits[0].recipe.totalTime);
            console.log(response.data.hits[0].recipe.uri);//instructions
            console.log(response.data.hits[0].recipe.image);
            console.log(response.data.hits[0].recipe.healthLabels);
            console.log(response.data.hits[0].recipe.dietLabels);
            console.log(response.data.hits[0].recipe.calories);

        });
};

displayRecipes();

// Exporting router 
module.exports = router;