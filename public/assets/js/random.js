const axios = require('axios');
const ENV = require('dotenv');
ENV.config();

// Credentials <wb>
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;


function randomRecipe (){
    
    const queryUrl = "https://api.edamam.com/search?q=&app_id=e3c21f1d&app_key=3e40f04f482e04daac9d6917ba78643f&from=0&to=3&calories=591-722";

    axios
        .get(queryUrl)
        .then((response) => {

        // Template of API response <wb>
        // console.log(response.hits);
        // console.log(response.data.hits[0].recipe.label);
        // console.log(response.data.hits[0].recipe.ingredientLines);
        // console.log(response.data.hits[0].recipe.totalTime);
        // console.log(response.data.hits[0].recipe.uri);//instructions
        // console.log(response.data.hits[0].recipe.image);
        // console.log(response.data.hits[0].recipe.healthLabels);
        // console.log(response.data.hits[0].recipe.dietLabels);
        // console.log(response.data.hits[0].recipe.calories);
        
        // Randomize our search result and display one randomized recipe
        const respHits = response.data.hits;
        const i = respHits[Math.floor(Math.random() * respHits.length)];
        
        // console.log(i.recipe.label);

        $(".label").html("label: " + i.recipe.label);
        $(".ingredient").html("Ingredients: " + i.recipe.ingredientLines);
        // $("").html("Total Time: " + i.recipe.totalTime);
        $(".instruction").html("Instructions: " + i.recipe.uri);
        $(".photo").html("Photo: " + i.recipe.image);
        // $("").html("label: " + i.recipe.healthLabels);
        // $("").html("label: " + i.recipe.dietLabels);
        // $("").html("label: " + i.recipe.calories);

    });
};

module.exports = {
    randomRecipe,
};