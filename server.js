
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
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log("Server is running on localhost " + PORT);
});







