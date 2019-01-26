

const showRecipes = () => {
    const dataInput = document.getElementById('textInput').value;
    console.log(dataInput)
    const queryURL = "https://api.edamam.com/search?q=" + dataInput+ "&app_id=e3c21f1d&app_key=3e40f04f482e04daac9d6917ba78643f&from=0&to=10&calories=591-722";
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then((response) => {
        $(".show").empty();
        
        var resp_hits = response.hits;
        
        for (var i = 0; i < resp_hits.length; i++) {
            // console.log(response.hits[i].recipe.label);


            var img = $("<img>");
            img.addClass("images");
            img.attr("width", "250")
            img.attr("src", response.hits[i].recipe.image)
            $(".show").append(img);

            var label = $("<p>");
            label.addClass("label");
            label.append(response.hits[i].recipe.label);
            $(".show").append(label);


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