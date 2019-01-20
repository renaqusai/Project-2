
function randomRecipe (){
    var randomOne = "random";
    var queryUrl = "https://api.edamam.com/search?q=" + randomOne + "&app_id=e3c21f1d&app_key=3e40f04f482e04daac9d6917ba78643f&from=0&to=100";

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response.hits);
        console.log(response.hits[0].recipe.label);
        console.log(response.hits[0].recipe.ingredientLines);
        console.log(response.hits[0].recipe.totalTime);
        console.log(response.hits[0].recipe.uri);//instructions
        console.log(response.hits[0].recipe.image);
        console.log(response.hits[0].recipe.healthLabels);
        console.log(response.hits[0].recipe.dietLabels);
        console.log(response.hits[0].recipe.calories);

        var resp_hits = response.hits;
        var i = resp_hits[Math.floor(Math.random() * resp_hits.length)];
        
        

        $("").html("label: " + i.recipe.label);
        $("").html("Ingredients: " + i.recipe.ingredientLines);
        $("").html("Total Time: " + i.recipe.totalTime);
        $("").html("Instructions: " + i.recipe.uri);
        $("").html("Photo: " + i.recipe.image);
        $("").html("label: " + i.recipe.healthLabels);
        $("").html("label: " + i.recipe.dietLabels);
        $("").html("label: " + i.recipe.calories);

        
        
    })

}


randomRecipe();