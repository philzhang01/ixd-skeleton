let foodData = require("../public/foodData.json");

exports.view = function(req, res) {
  console.log(foodData);
  res.render("food", foodData);
};
