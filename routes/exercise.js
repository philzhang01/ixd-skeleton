let exerciseData = require("../public/exerciseData.json");

exports.view = function(req, res) {
  res.render("exercise", exerciseData);
};

exports.updateexercise = function(req, res) {
  let day = req.query.day;
  let itemone_name = req.query.itemone_name;
  let itemone_time = req.query.itemone_time;

  let itemtwo_name = req.query.itemtwo_name;
  let itemtwo_time = req.query.itemtwo_time;

  let newPlan = {
    day,
    item_one: itemone_name + " " + itemone_time,
    item_two: itemtwo_name + " " + itemtwo_time
  };

  if (day === "Monday") {
    exerciseData.exercise[0] = newPlan;
  } else if (day === "Tuesday") {
    exerciseData.exercise[1] = newPlan;
  } else if (day === "Wednesday") {
    exerciseData.exercise[2] = newPlan;
  } else if (day === "Thursday") {
    exerciseData.exercise[3] = newPlan;
  } else if (day === "Friday") {
    exerciseData.exercise[4] = newPlan;
  } else if (day === "Saturday") {
    exerciseData.exercise[5] = newPlan;
  } else if (day === "Sunday") {
    exerciseData.exercise[6] = newPlan;
  } else {
    exerciseData.exercise.push(newPlan);
  }
};
