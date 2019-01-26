var rnd = require('./random');

$(function() {
    $(".random-button").on("click", function(event) {
        event.preventDefault();
        rnd.randomRecipe();
        console.log('yay');
      });
    
      });