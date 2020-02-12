let exerciseData = require("../public/exerciseData.json");

exports.view = function(req, res) {
  res.render("exercise", exerciseData);
};
