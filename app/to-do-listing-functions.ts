/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var listWorkTasks = function(taskCollection: Task[]): String[] {
    var workTasks: String[] = [];
    for(var task of taskCollection){
      if(task.constructor === WorkTask) {
        workTasks.push(task.description);
      }
    }
    return workTasks;
  }

  export var listHomeTasks = function(taskCollection: Task[]): String[] {
    var homeTasks: String[] = [];
    for(var task of taskCollection){
      if(task.constructor === HomeTask) {
        homeTasks.push(task.description);
      }
    }
    return homeTasks;
  }

  export var listHobbyTasks = function(taskCollection: Task[]): String[] {
    var hobbyTasks: String[] = [];
    for(var task of taskCollection){
      if(task.constructor === HobbyTask) {
        hobbyTasks.push(task.description);
      }
    }
    return hobbyTasks;
  }

  export var listHighPriorityTasks = function(taskCollection: Task[]): String[] {
    var highPriority: String[] = [];
    for(var task of taskCollection){
      if(task.priority.toLowerCase() === "high") {
        highPriority.push(task.description);
      }
    }
    return highPriority;
  }

  export var listMediumPriorityTasks = function(taskCollection: Task[]): String[] {
    var mediumPriority: String[] = [];
    for(var task of taskCollection){
      if(task.priority.toLowerCase() === "medium") {
        mediumPriority.push(task.description);
      }
    }
    return mediumPriority;
  }

  export var listLowPriorityTasks = function(taskCollection: Task[]): String[] {
    var lowPriority: String[] = [];
    for(var task of taskCollection){
      if(task.priority.toLowerCase() === "low") {
        lowPriority.push(task.description);
      }
    }
    return lowPriority;
  }

  export var listFirstHighPriorityTask = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var firstHighPriorityTask: String[] = [];
    for(var task of taskCollection){
      if((task.assignedTo === assignee) && (task.priority.toLowerCase() === "high")) {
        firstHighPriorityTask.push(task.description);
      }
    }
    return firstHighPriorityTask;
  }
}
