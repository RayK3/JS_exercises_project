export default class DomRunner {
  constructor(controller) {
    this.controller = controller;
  }

  giveExercise() {
    var exercise = this.controller.getExercise();
    var container = document.getElementById("exerciseContainer");
    container.innerHTML = '';

    var taskDisplay = document.createElement("DIV");
    taskDisplay.setAttribute("id", "taskDiv");
    taskDisplay.setAttribute("class", "display");
    var task = document.createElement("P");
    task.setAttribute("id", "task");

    task.innerHTML = exercise.task;

    var solutionDisplay = document.createElement("DIV");
    solutionDisplay.setAttribute("id", "solutionDiv");
    solutionDisplay.setAttribute("class", "display");
    var solution = document.createElement("INPUT");
    solution.setAttribute("id", "solution");
    solution.setAttribute("type", "text");
    solution.setAttribute("placeholder", "solution");

    taskDisplay.appendChild(task);
    solutionDisplay.appendChild(solution);
    container.appendChild(taskDisplay)
             .appendChild(solutionDisplay);

    var self = this;

    solution.addEventListener('input', function() {
      self.controller.checkInput(this.value, exercise.solution) ?
      this.style.color = 'green' : this.style.color = 'red';
    });
  }

  run() {
    this.giveExercise();
  }
}
