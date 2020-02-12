exports.view = function(req, res) {
  res.render("signin");
};

exports.verify = function(req, res) {
  let name = req.body.username;
  let password = req.body.password;

  console.log(name, password);

  if (name === "admin" && password === "12345") {
    res.redirect("home");
  }
};
