"use strict";

module.exports = function(app) {
  var toDoList = require("../controllers/toDoListController");

  app.route("/tasks")
    .get(toDoList.list_all_tasks)
    .post(toDoList.create_a_task);

  app.route("/tasks/:taskId")
    .get(toDoList.read_a_task)
    .put(toDoList.update_a_task)
    .delete(toDoList.delete_a_task);

};
