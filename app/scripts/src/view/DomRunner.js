export default class DomRunner {
  constructor(controller) {
    this.controller = controller;
  }

  display() {
    document.body.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
    var exerciseContainer = document.getElementById("exerciseContainer");
    exerciseContainer.innerHTML = '';

    var exerciseDisplay = this.createExerciseElements();
    var createExerciseDisplay = this.createAddExerciseElements();

    var displayAddButton = document.createElement("BUTTON");
    displayAddButton.setAttribute("id", "displayAddInterface");
    displayAddButton.innerHTML = 'Add New Exercise';

    var self = this;

    displayAddButton.addEventListener('click', function() {
      createExerciseDisplay.style.display = 'block';
    });

    var streakContainer = document.createElement("DIV");
    streakContainer.setAttribute("id", "streakContainer");

    var streakDisplay = document.createElement("H1");
    streakDisplay.setAttribute("id", "streakDisplay");
    streakDisplay.innerHTML = `STREAK ${this.controller.getStreak()}`;

    var recordDisplay = document.createElement("H1");
    recordDisplay.setAttribute("id", "scoreDisplay");
    recordDisplay.innerHTML = `RECORD ${this.controller.getRecord()}`;

    streakContainer.appendChild(streakDisplay);
    streakContainer.appendChild(recordDisplay);

    exerciseContainer.appendChild(exerciseDisplay);
    exerciseContainer.appendChild(displayAddButton);
    exerciseContainer.appendChild(createExerciseDisplay);
    exerciseContainer.appendChild(streakContainer);

    var solutionInput = document.getElementById("solutionInput");

    solutionInput.focus(); //sets the focus on the new text box
  }

  createExerciseElements() {
    var exercise = this.controller.getExercise();

    var taskDisplay = document.createElement("DIV");
    taskDisplay.setAttribute("id", "taskDiv");
    taskDisplay.setAttribute("class", "display");

    var task = document.createElement("P");
    task.setAttribute("id", "ExerciseTask");
    task.innerHTML = exercise.task;

    var solutionDisplay = document.createElement("DIV");
    solutionDisplay.setAttribute("id", "solutionDiv");
    solutionDisplay.setAttribute("class", "display");

    var solutionInput = document.createElement("INPUT");
    solutionInput.setAttribute("id", "solutionInput");
    solutionInput.setAttribute("type", "text");
    solutionInput.setAttribute("placeholder", "solution");

    var self = this;

    solutionInput.addEventListener('input', function() {
      if(this.value === exercise.solution) {
        self.controller.incrementStreak();
        self.controller.checkAndUpdateRecord();
        self.display();
      } else if(self.controller.checkInput(this.value, exercise.solution)) {
        this.style.color = 'green';
        document.body.style.backgroundColor = 'rgba(0,255,0,0.3)';
      } else {
        self.controller.resetStreak();
        self.controller.checkAndUpdateRecord();
        document.getElementById("streakDisplay").innerHTML = `STREAK ${self.controller.getStreak()}`;

        this.style.color = 'red';
        document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
      }
    });

    taskDisplay.appendChild(task);
    solutionDisplay.appendChild(solutionInput);

    var exerciseDisplay = document.createElement("DIV");
    exerciseDisplay.appendChild(taskDisplay);
    exerciseDisplay.appendChild(solutionDisplay);

    return exerciseDisplay;
  }

  createAddExerciseElements() {
    var createExerciseDisplay = document.createElement("DIV");
    createExerciseDisplay.style.display = 'none';
    createExerciseDisplay.innerHTML = '';

    var newTaskInput = document.createElement("INPUT");
    newTaskInput.setAttribute("id", "newTaskInput");
    newTaskInput.setAttribute("type", "text");
    newTaskInput.setAttribute("placeholder", "New Task");

    var newSolutionInput = document.createElement("INPUT");
    newSolutionInput.setAttribute("id", "newSolutionInput");
    newSolutionInput.setAttribute("type", "text");
    newSolutionInput.setAttribute("placeholder", "New Solution");

    var addExerciseButton = document.createElement("BUTTON");
    addExerciseButton.setAttribute("id", "addExerciseButton");
    addExerciseButton.innerHTML = 'Add';

    createExerciseDisplay.appendChild(newTaskInput);
    createExerciseDisplay.appendChild(newSolutionInput);
    createExerciseDisplay.appendChild(addExerciseButton);

    var self = this;

    addExerciseButton.addEventListener('click', function() {
      if(newTaskInput.value === '' || newSolutionInput.value === '') {
        console.log('Please fill out all fields.');
      } else {
        self.controller.addExercise(newTaskInput.value, newSolutionInput.value);
        createExerciseDisplay.style.display = 'none';
        newTaskInput.value = '';
        newSolutionInput.value = '';
      }
    });

    return createExerciseDisplay;
  }

  run() {
    this.display();
  }
}
