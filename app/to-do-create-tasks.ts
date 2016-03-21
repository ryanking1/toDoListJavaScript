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
for(var task of thorTasks){
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


$(function() {
  $("#lowPriority").click(function(){
    $("#result").empty();
    for(var low of lowPriorities){
      $("#result").append("<p>" + low + "</p>");
    }
    event.preventDefault();
    });

  $("#mediumPriority").click(function(){
    $("#result").empty();
    for(var medium of mediumPriorities){
      $("#result").append("<p>" + medium + "</p>");
    }
    event.preventDefault();
    });

  $("#highPriority").click(function(){
    $("#result").empty();
    for(var high of highPriorities){
      $("#result").append("<p>" + high + "</p>");
    }
    event.preventDefault();
    });

  $("#hobbyTasks").click(function(){
    $("#result").empty();
    for(var hobby of hobbyTasks){
      $("#result").append("<p>" + hobby + "</p>");
    }
    event.preventDefault();
    });

  $("#homeTasks").click(function(){
    $("#result").empty();
    for(var home of homeTasks){
      $("#result").append("<p>" + home + "</p>");
    }
    event.preventDefault();
    });

  $("#workTasks").click(function(){
    $("#result").empty();
    for(var work of workTasks){
      $("#result").append("<p>" + work + "</p>");
    }
    event.preventDefault();
    });

  $("#person").submit(function(){
    // $("#result").empty();
    var person = $("#personInput").val();
    console.log(person);
    var firstHighPriorityTask = ToDoList.listFirstHighPriorityTask(people[person], tasks);
    $("#result").append("<p>" + firstHighPriorityTask + "</p>");
    event.preventDefault();
    });
  });
