const express = require('express');

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());                      

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/recipe-controller");
app.use(routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log("Server is running on http://localhost:" + PORT);
});
