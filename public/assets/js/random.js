var axios = require('axios');
const ENV = require('dotenv');
ENV.config();

// Credentials <wb>
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;



function randomRecipe() {

    const queryUrl = "https://api.edamam.com/search?q=&app_id="+APP_ID+"&app_key="+APP_KEY+"&from=0&to=3&calories=591-722";

    axios
        .get(queryUrl)
        .then((response) => {

            // Template of API response <wb>
            console.log(response.hits);

            // Randomize our search result and display one randomized recipe
            const respHits = response.data.hits;
            const i = respHits[Math.floor(Math.random() * respHits.length)];

            console.log(i.recipe.label);
            console.log(i.recipe.ingredientLines);
            console.log(i.recipe.image);
            console.log(i.recipe.uri);



            var img = $("<img>");
            img.addClass("image");
            img.attr("width", "100")
            img.attr("src", i.recipe.image)
            $(".photo").append(img);

            $(".label").html(i.recipe.label);

            var ingredients = i.recipe.ingredientLines;
            var ul = $('<ul>');
            for (var j = 0; j < ingredients.length; j++) {
                var li = $('<li>');
                li.append(ingredients[j]);
                ul.append(li);
            }
            $('.ingredients').append(ul);

            $(".instruction").html("Instructions: " + i.recipe.uri);


        });
};

module.exports = {
    randomRecipe
};