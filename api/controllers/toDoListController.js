
"use strict";

var mongoose = require("mongoose"),
  Task = mongoose.model("Tasks");

exports.list_all_tasks = function(request, response) {
  Task.find({}, function(error, task) {
    if (error)
      response.send(error);
    request.json(task);
  });
};

exports.create_a_task = function(request, response) {
  var new_task = new Task(request.body);
  new_task.save(function(error, task) {
    if (error)
      response.send(error);
    request.json(task);
  });
};

exports.read_a_task = function(request, response) {
  Task.findById(request.params.taskId, function(error, task) {
    if (error)
      response.send(error);
    request.json(task);
  });
};

exports.update_a_task = function(request, response) {
  Task.findOneAndUpdate({ _id: request.params.taskID }, request.body, { new: true }, function(error, task){
    if (error)
      response.send(error);
    request.json(task);
  });
};

exports.delete_a_task = function(request, response) {
  Task.remove({
    _id: request.params.taskId
  }, function(error, task) {
      if (error)
        response.send(error);
      request.json({ message: "Task has been successfully deleted" });
  });
};
