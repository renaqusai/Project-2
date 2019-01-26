(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var rnd = require('./random');

$(function() {
    $(".random-button").on("click", function(event) {
        event.preventDefault();
        rnd.randomRecipe();
        console.log('yay');
      });
    
      });
},{"./random":2}],2:[function(require,module,exports){
// var axios = require('axios');
// const ENV = require('dotenv');
// ENV.config();

// // Credentials <wb>
// const APP_ID = process.env.APP_ID;
// const APP_KEY = process.env.APP_KEY;



// function randomRecipe() {

//     const queryUrl = "https://api.edamam.com/search?q=&app_id="+APP_ID+"&app_key="+APP_KEY+"&from=0&to=3&calories=591-722";

//     axios
//         .get(queryUrl)
//         .then((response) => {

//             // Template of API response <wb>
//             console.log(response.hits);

//             // Randomize our search result and display one randomized recipe
//             const respHits = response.data.hits;
//             const i = respHits[Math.floor(Math.random() * respHits.length)];

//             console.log(i.recipe.label);
//             console.log(i.recipe.ingredientLines);
//             console.log(i.recipe.image);
//             console.log(i.recipe.uri);



//             var img = $("<img>");
//             img.addClass("image");
//             img.attr("width", "100")
//             img.attr("src", i.recipe.image)
//             $(".photo").append(img);

//             $(".label").html(i.recipe.label);

//             var ingredients = i.recipe.ingredientLines;
//             var ul = $('<ul>');
//             for (var j = 0; j < ingredients.length; j++) {
//                 var li = $('<li>');
//                 li.append(ingredients[j]);
//                 ul.append(li);
//             }
//             $('.ingredients').append(ul);

//             $(".instruction").html("Instructions: " + i.recipe.uri);


//         });
// };

// module.exports = {
//     randomRecipe
// };
},{}],3:[function(require,module,exports){
// var axios = require('axios');
// const ENV = require('dotenv');
// ENV.config();

// // Credentials <wb>
// const APP_ID = process.env.APP_ID;
// const APP_KEY = process.env.APP_KEY;



// const searchRecipes = () => {
//     const queryUrl = "https://api.edamam.com/search?q=&app_id="+APP_ID+"&app_key="+APP_KEY+"&from=0&to=3&calories=591-722";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then((response) => {

//         var resp_hits = response.hits;
        
//         for (var i = 0; i < resp_hits.length; i++) {

//             var img = $("<img>");
//             img.addClass("images");
//             img.attr("width", "250")
//             img.attr("src", response.hits[i].recipe.image)
//             $(".recphoto").append(img);

//             var label = $("<p>");
//             label.addClass("label");
//             label.append(response.hits[i].recipe.label);
//             $(".reclabel").append(label);


//             var ingredients = response.hits[i].recipe.ingredientLines;
//             var ul = $('<ul>');
//             for (var j = 0; j < ingredients.length; j++) {
//                 var li = $('<li>');
//                 li.append(ingredients[i]);
//                 ul.append(li);
//             }
//             $('.recingredients').append(ul);

//             var instruction = $("<p>");
//             instruction.addClass("instruction");
//             instruction.append(response.hits[i].recipe.uri);
//             $(".recinstruction").append(instruction);

//         }
//     });
// }

// searchRecipes();

// module.exports = {
//     searchRecipes,
// }
},{}],4:[function(require,module,exports){

const showRecipes = () => {
    const dataInput = document.getElementById('textInput').value;
    // console.log(dataInput)
    const queryURL = "https://api.edamam.com/search?q=" + dataInput+ "&app_id=e3c21f1d&app_key=3e40f04f482e04daac9d6917ba78643f&from=0&to=10&calories=591-722";
    // console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then((response) => {
        $(".show").empty();
        
        var resp_hits = response.hits;
        
        for (var i = 0; i < resp_hits.length; i++) {
            // console.log(response.hits[i].recipe.label);


            // var img = $("<img>");
            // img.addClass("images");
            // img.attr("width", "250")
            // img.attr("src", response.hits[i].recipe.image)
            // $(".show").append(img);

            // var label = $("<p>");
            // label.addClass("label");
            // label.append(response.hits[i].recipe.label);
            // $(".show").append(label);

            
            // var img = $("<img>");
            // img.addClass("search-images");
            // img.attr("width", "250")
            // img.attr("src", response.hits[i].recipe.image)
            // $(".show").append(img);

            var label = $("<p>");
            label.addClass("search-label");
            label.append(response.hits[i].recipe.label);
            $(".show").append(label);

            var ingr = $("<div>");
            ingr.addClass("search-ingr");
            ingr.append(response.hits[i].recipe.ingredientLines);
            $(".show").append(ingr);


            // var ingredients = response.hits[i].recipe.ingredientLines;
            // var ul = $('<ul>');
            // for (var j = 0; j < ingredients.length; j++) {
            //     var li = $('<li>');
            //     li.append(ingredients[i]);
            //     ul.append(li);
            // }
            // $('.recingredients').append(ul);

            // var instruction = $("<p>");
            // instruction.addClass("instruction");
            // instruction.append(response.hits[i].recipe.uri);
            // $(".recinstruction").append(instruction);

        }
    });
}

showRecipes();

$(document).on("click", "#inputButton", showRecipes);

module.exports = {
    showRecipes,
}
},{}]},{},[1,2,3,4]);
