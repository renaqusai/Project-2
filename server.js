const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport.js');


mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey] 
    })
);

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());                      

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/recipe_controller");


app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.use(routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log("Server is running on http://localhost:" + PORT);
});







