"use strict";
module.exports = function(app) {
  var toDoList = require("../controllers/toDoListController");

  app.route("/tasks")
    .get(toDoList.list_all_tasks)
    .get(toDoList.create_a_task);

  ap.route("/tasks/:taskId")
    .get(toDoList.read_a_task)
    .get(toDoList.update_a_task)
    .get(toDoList.delete_a_task);
};
