
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var recipe = {
  all: (cb) => {
    orm.all("recipes", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: (cols, vals, cb) => {
    orm.create("recipes", cols, vals, function(res) {
      cb(res);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.update("recipes", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("recipes", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = recipe;

