var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assingedTo) {
            _super.call(this, description, priority);
            this.description = description;
            this.priority = priority;
            this.assingedTo = assingedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo);
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "low");
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "diane@epicodus.com"
    };
    var thor = {
        name: "Thor Son of Odin",
        email: "thor@asgard.com"
    };
    var loki = {
        name: "God of Mischief",
        email: "loki@geocities.com",
        phone: "555-666-7777"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
    ToDoList.listWorkTasks = function (taskCollection) {
        var workTasks = [];
        for (var _i = 0, taskCollection_2 = taskCollection; _i < taskCollection_2.length; _i++) {
            var task = taskCollection_2[_i];
            if (task.constructor === ToDoList.WorkTask) {
                workTasks.push(task.description);
            }
        }
        return workTasks;
    };
    ToDoList.listHomeTasks = function (taskCollection) {
        var homeTasks = [];
        for (var _i = 0, taskCollection_3 = taskCollection; _i < taskCollection_3.length; _i++) {
            var task = taskCollection_3[_i];
            if (task.constructor === ToDoList.HomeTask) {
                homeTasks.push(task.description);
            }
        }
        return homeTasks;
    };
    ToDoList.listHobbyTasks = function (taskCollection) {
        var hobbyTasks = [];
        for (var _i = 0, taskCollection_4 = taskCollection; _i < taskCollection_4.length; _i++) {
            var task = taskCollection_4[_i];
            if (task.constructor === ToDoList.HobbyTask) {
                hobbyTasks.push(task.description);
            }
        }
        return hobbyTasks;
    };
    ToDoList.listHighPriorityTasks = function (taskCollection) {
        var highPriority = [];
        for (var _i = 0, taskCollection_5 = taskCollection; _i < taskCollection_5.length; _i++) {
            var task = taskCollection_5[_i];
            if (task.priority.toLowerCase() === "high") {
                highPriority.push(task.description);
            }
        }
        return highPriority;
    };
    ToDoList.listMediumPriorityTasks = function (taskCollection) {
        var mediumPriority = [];
        for (var _i = 0, taskCollection_6 = taskCollection; _i < taskCollection_6.length; _i++) {
            var task = taskCollection_6[_i];
            if (task.priority.toLowerCase() === "medium") {
                mediumPriority.push(task.description);
            }
        }
        return mediumPriority;
    };
    ToDoList.listLowPriorityTasks = function (taskCollection) {
        var lowPriority = [];
        for (var _i = 0, taskCollection_7 = taskCollection; _i < taskCollection_7.length; _i++) {
            var task = taskCollection_7[_i];
            if (task.priority.toLowerCase() === "low") {
                lowPriority.push(task.description);
            }
        }
        return lowPriority;
    };
    ToDoList.listFirstHighPriorityTask = function (assignee, taskCollection) {
        var firstHighPriorityTask = [];
        for (var _i = 0, taskCollection_8 = taskCollection; _i < taskCollection_8.length; _i++) {
            var task = taskCollection_8[_i];
            if ((task.assignedTo === assignee) && (task.priority.toLowerCase() === "high")) {
                firstHighPriorityTask.push(task.description);
            }
        }
        return firstHighPriorityTask;
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the Dishes", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));
console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's Tasks: ");
for (var _i = 0, thorTasks_1 = thorTasks; _i < thorTasks_1.length; _i++) {
    var task = thorTasks_1[_i];
    console.log(task);
}
var lowPriorities = ToDoList.listLowPriorityTasks(tasks);
var mediumPriorities = ToDoList.listMediumPriorityTasks(tasks);
var highPriorities = ToDoList.listHighPriorityTasks(tasks);
var hobbyTasks = ToDoList.listHobbyTasks(tasks);
var homeTasks = ToDoList.listHomeTasks(tasks);
var workTasks = ToDoList.listWorkTasks(tasks);
// var person = $("#personName").val();
// var firstHighPriorityTask = ToDoList.listFirstHighPriorityTask(person, tasks);
$(function () {
    $("#lowPriority").click(function () {
        $("#result").empty();
        for (var _i = 0, lowPriorities_1 = lowPriorities; _i < lowPriorities_1.length; _i++) {
            var low = lowPriorities_1[_i];
            $("#result").append("<p>" + low + "</p>");
        }
        event.preventDefault();
    });
    $("#mediumPriority").click(function () {
        $("#result").empty();
        for (var _i = 0, mediumPriorities_1 = mediumPriorities; _i < mediumPriorities_1.length; _i++) {
            var medium = mediumPriorities_1[_i];
            $("#result").append("<p>" + medium + "</p>");
        }
        event.preventDefault();
    });
    $("#highPriority").click(function () {
        $("#result").empty();
        for (var _i = 0, highPriorities_1 = highPriorities; _i < highPriorities_1.length; _i++) {
            var high = highPriorities_1[_i];
            $("#result").append("<p>" + high + "</p>");
        }
        event.preventDefault();
    });
    $("#hobbyTasks").click(function () {
        $("#result").empty();
        for (var _i = 0, hobbyTasks_1 = hobbyTasks; _i < hobbyTasks_1.length; _i++) {
            var hobby = hobbyTasks_1[_i];
            $("#result").append("<p>" + hobby + "</p>");
        }
        event.preventDefault();
    });
    $("#homeTasks").click(function () {
        $("#result").empty();
        for (var _i = 0, homeTasks_1 = homeTasks; _i < homeTasks_1.length; _i++) {
            var home = homeTasks_1[_i];
            $("#result").append("<p>" + home + "</p>");
        }
        event.preventDefault();
    });
    $("#workTasks").click(function () {
        $("#result").empty();
        for (var _i = 0, workTasks_1 = workTasks; _i < workTasks_1.length; _i++) {
            var work = workTasks_1[_i];
            $("#result").append("<p>" + work + "</p>");
        }
        event.preventDefault();
    });
    $("#person").submit(function () {
        // $("#result").empty();
        var person = $("#personInput").val();
        console.log(person);
        var firstHighPriorityTask = ToDoList.listFirstHighPriorityTask(people[person], tasks);
        $("#result").append("<p>" + firstHighPriorityTask + "</p>");
        event.preventDefault();
    });
});
