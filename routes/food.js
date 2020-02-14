let foodData = require("../public/foodData.json");

exports.view = function(req, res) {
  console.log(foodData);
  res.render("food", foodData);
};

exports.updatefood = function(req, res) {
  let day = req.query.day;
  let breakfast = req.query.breakfast;
  let lunch = req.query.lunch;
  let dinner = req.query.dinner;

  let newPlan = {
    day: day,
    breakfast: breakfast + "kCal",
    lunch: lunch + "kCal",
    dinner: dinner + "kCal"
  };

  if (day === "Monday") {
    foodData.food[0] = newPlan;
  } else if (day === "Tuesday") {
    foodData.food[1] = newPlan;
  } else if (day === "Wednesday") {
    foodData.food[2] = newPlan;
  } else if (day === "Thursday") {
    foodData.food[3] = newPlan;
  } else if (day === "Friday") {
    foodData.food[4] = newPlan;
  } else if (day === "Saturday") {
    foodData.food[5] = newPlan;
  } else if (day === "Sunday") {
    foodData.food[6] = newPlan;
  }
};
