var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Task = require("./api/models/toDoListModel"), //created model loading here
  bodyParser = require("body-parser");

// mongoose instance connection url
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/ToDodb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/toDoListRoutes");
routes(app);

app.listen(port);

console.log("toDoListApi RESTful API Server started on: " + port);

app.use(function(response, request) {
  response.status(404).send({ url: request.originUrl + "not found..." })
});
