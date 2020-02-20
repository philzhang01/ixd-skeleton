let foodData = require("../public/foodData.json");

exports.view = function(req, res) {
  res.render("info");
};

exports.confirm = function(req, res) {
  console.log("confirm!", req.body);
  let target = req.body.target;
  foodData["plan"] = req.body.plan;
  foodData["target"] = req.body.target;
  for (let i = 0; i < 7; i++) {
    if (i % 2 === 0) {
      foodData.food[i].breakfast = `${Math.floor(target * 0.3)}kcal`;
      foodData.food[i].lunch = `${Math.floor(target * 0.4)}kcal`;
      foodData.food[i].dinner = `${Math.floor(target * 0.3)}kcal`;
    } else {
      foodData.food[i].breakfast = `${Math.floor(target * 0.35)}kcal`;
      foodData.food[i].lunch = `${Math.floor(target * 0.45)}kcal`;
      foodData.food[i].dinner = `${Math.floor(target * 0.2)}kcal`;
    }
  }
};
