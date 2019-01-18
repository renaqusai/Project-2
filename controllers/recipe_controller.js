const express = require('express');
const router = express.Router();

var recipe = require("../models/recipemodel");

router.get("/", function (req, res) {
    res.render("index");
});

// Exporting router 
module.exports = router;