﻿function Task(data) {
    this.title = ko.observable(data.title);
    this.isDone = ko.observable(data.isDone);
    this.timeSpent = ko.observable(data.timeSpent);
}

function TaskListViewModel() {
    // Data
    var self = this;
    self.tasks = ko.observableArray([]);
    self.newTaskText = ko.observable();
    self.incompleteTasks = ko.computed(function () {
        return ko.utils.arrayFilter(self.tasks(), function (task) { return !task.isDone() && !task._destroy });
    });

    // Operations
    self.addTask = function () {
        self.tasks.push(new Task({ title: this.newTaskText() }));
        self.newTaskText("");
    };
    self.removeTask = function (task) { self.tasks.destroy(task) };

    // Load initial state from server, convert it to Task instances, then populate self.tasks
    $.getJSON("/tasks", function (allData) {
        var mappedTasks = $.map(allData, function (item) { return new Task(item) });
        self.tasks(mappedTasks);
    });

    self.save = function () {
        $.ajax("/tasks", {
            data: ko.toJSON({ tasks: self.tasks }),
            type: "post", contentType: "application/json",
            success: function (result) { alert(result) }
        });
    };

    self.totalTime = ko.computed(function () {
        var total = 0;
        if ((self.tasks().timeSpent != 0) || !self.tasks().timeSpent.Empty) {
            for (var i = 0; i < self.tasks().length; i++) {
                total += self.tasks()[i].timeSpent;
            }
        }
        else total = 0;

        return total;
    });
}

ko.applyBindings(new TaskListViewModel());