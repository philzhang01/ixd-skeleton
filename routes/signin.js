exports.view = function(req, res) {
  res.render("signin");
};

exports.verify = function(req, res) {
  let name = req.body.username;
  let password = req.body.password;

  console.log(name, password);

  if (name === "testuser" && password === "pass123") {
    res.redirect("home");
  }
};
