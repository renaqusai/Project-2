
const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("We are good to go");
});

const PORT = process.env.PORT || 5080;

app.listen(PORT, function() {
    console.log("Server is running on " + PORT);
});









