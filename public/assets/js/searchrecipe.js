const searchRecipes = () => {
    const queryURL = "https://api.edamam.com/search?q=&app_id=e3c21f1d&app_key=3e40f04f482e04daac9d6917ba78643f&from=0&to=3&calories=591-722";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then((response) => {

        console.log(response.hits);
        var resp_hits = response.hits;
        // console.log(response.data.hits[0].recipe.ingredientLines);
        // console.log(response.data.hits[0].recipe.totalTime);
        // console.log(response.data.hits[0].recipe.uri); //instructions
        // console.log(response.data.hits[0].recipe.image);
        // console.log(response.data.hits[0].recipe.healthLabels);
        // console.log(response.data.hits[0].recipe.dietLabels);
        // console.log(response.data.hits[0].recipe.calories);

        for (var i = 0; i < resp_hits.length; i++) {
            console.log(response.hits[i].recipe.label);

            var img = $("<img>");
            img.addClass("images");
            img.attr("width", "250")
            img.attr("src", response.hits[i].recipe.image)
            console.log(img)
            $("#search").append(img);

            var label = $("<p>");
            label.addClass("label");
            label.append(response.hits[i].recipe.label);
            $("#search").append(label);


            var ingredients = response.hits[i].recipe.ingredientLines;
            var ul = $('<ul>');
            for (var i = 0; i < ingredients.length; i++) {
                var li = $('<li>');
                li.append(ingredients[i]);
                ul.append(li);
            }
            $('#search').append(ul);

            var instruction = $("<p>");
            instruction.addClass("instruction");
            instruction.append(response.hits[i].recipe.uri);
            $("#search").append(instruction);

        }
    });
}

searchRecipes();

module.exports = {
    searchRecipes,
}