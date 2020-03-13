/**
 * Module dependencies.
 */

var express = require("express");
var http = require("http");
var path = require("path");
var handlebars = require("express3-handlebars");

var index = require("./routes/index");
var changePlan = require("./routes/changePlan");
var food = require("./routes/food");
var exercise = require("./routes/exercise");
var info = require("./routes/info");
var plan = require("./routes/plan");
var signin = require("./routes/signin");
var home = require("./routes/home");
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser("IxD secret key"));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));

// development only
if ("development" == app.get("env")) {
  app.use(express.errorHandler());
}

app.get("/", index.view);
app.get("/home", home.view);
app.get("/food_A", food.view);
app.get("/food", food.viewAlt);
app.get("/exercise", exercise.view);
app.get("/plan", plan.view);
app.get("/info", info.view);
app.get("/changePlan", changePlan.view);
app.get("/signin", signin.view);

app.post("/confirm", info.confirm);
app.get("/updatefood", food.updatefood);
app.get("/updateexercise", exercise.updateexercise);
app.post("/signinVerify", signin.verify);
app.post("/updatefoodAlt", food.updatefoodAlt);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});
