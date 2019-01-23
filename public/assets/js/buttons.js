const rnd = require('./random');

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".random-button").on("click", function(event) {
      event.preventDefault();
      console.log("i did it!");
      rnd.randomRecipe();
      $('.random-button').hide();
      });

    // Send the PUT request.

  
    $(".submit").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
        console.log("i did it!")

      var newBurger = {
        Burger_Name: $(".burger-input").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        url: "http://localhost:3000",
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  