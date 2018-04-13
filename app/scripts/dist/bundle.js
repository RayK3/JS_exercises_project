(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ExerciseRepository = require('./model/ExerciseRepository');

var _ExerciseRepository2 = _interopRequireDefault(_ExerciseRepository);

var _ExerciseController = require('./controller/ExerciseController');

var _ExerciseController2 = _interopRequireDefault(_ExerciseController);

var _DomRunner = require('./view/DomRunner.js');

var _DomRunner2 = _interopRequireDefault(_DomRunner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.exRep = new _ExerciseRepository2.default();
    this.controller = new _ExerciseController2.default(this.exRep);
    this.domRunner = new _DomRunner2.default(this.controller);
  }

  _createClass(App, [{
    key: 'run',
    value: function run() {
      this.domRunner.run();
    }
  }]);

  return App;
}();

exports.default = App;

},{"./controller/ExerciseController":2,"./model/ExerciseRepository":5,"./view/DomRunner.js":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ExerciseRepository = require('../model/ExerciseRepository');

var _ExerciseRepository2 = _interopRequireDefault(_ExerciseRepository);

var _Streak = require('../model/Streak');

var _Streak2 = _interopRequireDefault(_Streak);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExerciseController = function () {
  function ExerciseController(exRep) {
    _classCallCheck(this, ExerciseController);

    this.exRep = exRep;
    this.streak = new _Streak2.default();
  }

  _createClass(ExerciseController, [{
    key: 'getExercise',
    value: function getExercise() {
      return this.exRep.getExercise();
    }
  }, {
    key: 'checkInput',
    value: function checkInput(input, solution) {
      return input === solution.substring(0, input.length);
    }
  }, {
    key: 'addExercise',
    value: function addExercise(task, solution) {
      return this.exRep.addExercise(task, solution);
    }
  }, {
    key: 'getStreak',
    value: function getStreak() {
      return this.streak.currentStreak;
    }
  }, {
    key: 'incrementStreak',
    value: function incrementStreak() {
      this.streak.increment();
    }
  }, {
    key: 'resetStreak',
    value: function resetStreak() {
      this.streak.reset();
    }
  }, {
    key: 'getRecord',
    value: function getRecord() {
      return this.streak.record;
    }
  }, {
    key: 'checkAndUpdateRecord',
    value: function checkAndUpdateRecord() {
      this.streak.checkAndUpdateRecord();
    }
  }, {
    key: 'storeRecord',
    value: function storeRecord() {
      this.streak.storeRecord();
    }
  }, {
    key: 'setExercises',
    value: function setExercises() {
      this.exRep.setExercises();
    }
  }, {
    key: 'storeExercises',
    value: function storeExercises() {
      this.exRep.storeExercises();
    }
  }, {
    key: 'retrieveStored',
    value: function retrieveStored() {
      this.exRep.retrieveExercises();
      this.streak.retrieveRecord();
    }
  }, {
    key: 'removeStoredExercises',
    value: function removeStoredExercises() {
      this.exRep.removeStoredExercises();
    }
  }, {
    key: 'resetRecord',
    value: function resetRecord() {
      this.streak.resetRecord();
    }
  }]);

  return ExerciseController;
}();

exports.default = ExerciseController;

},{"../model/ExerciseRepository":5,"../model/Streak":6}],3:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  new _app2.default().run();
};

},{"./app":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _guidGen = require('./guidGen');

var _guidGen2 = _interopRequireDefault(_guidGen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Exercise = function Exercise(task, solution) {
  _classCallCheck(this, Exercise);

  this.id = (0, _guidGen2.default)();
  this.task = task;
  this.solution = solution;
};

exports.default = Exercise;

},{"./guidGen":7}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Exercise = require('./Exercise');

var _Exercise2 = _interopRequireDefault(_Exercise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExerciseRepository = function () {
  function ExerciseRepository() {
    _classCallCheck(this, ExerciseRepository);

    this.initialExercises = [new _Exercise2.default('Retrieve the second word from this sentence using substring(). Call the string str.', 'str.substring(9, 12);'), new _Exercise2.default('Remove "Apple" and "Orange" from var array = ["Pineapple", "Apple", "Orange"] and add "Pear" using splice().', 'array.splice(1, 2, "Pear");'), new _Exercise2.default('Add "Pear" to the beginning of var array', 'array.unshift("Pear");'), new _Exercise2.default('Add "Pear" to the end of var array.', 'array.push("Pear");'), new _Exercise2.default('Test if variable x is less than 30.', 'x < 30;'), new _Exercise2.default('Test if variable x is less than or equal to 20.', 'x <= 20;'), new _Exercise2.default('Return the property \'age\' of object user using brackets.', 'user[\'age\'];'), new _Exercise2.default('Add property \'size\' to object user using brackets and set it\'s value to three', 'user[\'size\'] = 3;'), new _Exercise2.default('Delete property \'key\' from var object.', 'delete object[\'key\'];'), new _Exercise2.default('Concatenate two strings: "abc" and "def".', '"abc" + "def";'), new _Exercise2.default('Get length of "word".', '"word".length;'), new _Exercise2.default('Compare 5 and 7 strictly.', '5 === 7;'), new _Exercise2.default('Test if 5 is even.', '5 % 2 === 0;'), new _Exercise2.default('Test if 7 is odd.', '7 % 2 === 1;'), new _Exercise2.default('Test if the string "words" has an even length.', '"words".length % 2 === 0;'), new _Exercise2.default('Test if the string "words" has an odd length.', '"words".length % 2 === 1;'), new _Exercise2.default('Average 5 and 9', '(5 + 9)/2;'), new _Exercise2.default('Compute the area of a triangle with base = 7 and height = 3.', '(7 * 3) / 2;'), new _Exercise2.default('Add the array [1, 2] as property \'groups\' to object \'user\'.', 'user["groups"] = [1, 2];'), new _Exercise2.default('Get the fifth element from [88, 99, 44, 3, 2, 1].', '[88, 99, 44, 3, 2, 1][4];'), new _Exercise2.default('Get the third element from var array = [88, 99, 44, 3, 2, 1].', 'array[2];'), new _Exercise2.default('Get the first element from [5, 7, 9] using [] notation.', '[5, 7, 9][0];'), new _Exercise2.default('Get the first element from [5, 6, 9] using shift().', '[5, 6, 9].shift();'), new _Exercise2.default('Get the last element from var array = [5, 6, 9] using [].', 'array[array.length - 1];'), new _Exercise2.default('Get the last element from var array = [5, 6, 9] using pop().', 'array.pop();'), new _Exercise2.default('Add 1 to the front of var array = [5, 6, 9].', 'array.unshift(1);'), new _Exercise2.default('Add 1 to the back of var array = [5, 6].', 'array.push(1);'), new _Exercise2.default('Concatenate array a and array b.', 'a.concat(b);'), new _Exercise2.default('Get the remainder of array arr starting at index i.', 'arr.slice(i);'), new _Exercise2.default('Get the subarray between index 5 and 7 of array arr.', 'arr.slice(5, 7);'), new _Exercise2.default('Use slice() to return [4, 5] from [2, 3, 4, 5, 6].', '[2, 3, 4, 5, 6].slice(2, 4);'), new _Exercise2.default('Use slice() to return [2, 3, 4] from [2, 3, 4, 5, 6].', '[2, 3, 4, 5, 6].slice(0, 3);'), new _Exercise2.default('Turn "ABC" into ["A", "B", "C"].', '"ABC".split("");'), new _Exercise2.default('Turn "A B C" into ["A", "B", "C"].', '"A B C".split(" ");'), new _Exercise2.default('Remove one element from index 1 in array numbers and insert 7 and 8 instead.', 'numbers.splice(1, 1, 7, 8);')];
    this.setExercises();
  }

  _createClass(ExerciseRepository, [{
    key: 'getExercise',
    value: function getExercise() {
      return this.totalExercises[Math.floor(Math.random() * this.totalExercises.length)];
    }
  }, {
    key: 'addExercise',
    value: function addExercise(task, solution) {
      this.userDefinedExercises.push(new _Exercise2.default(task, solution));
      this.totalExercises = this.initialExercises.concat(this.userDefinedExercises);
    }
  }, {
    key: 'setExercises',
    value: function setExercises() {
      this.userDefinedExercises = this.retrieveExercises();
      if (!this.userDefinedExercises) {
        this.userDefinedExercises = [];
        this.totalExercises = this.initialExercises.map(function (e) {
          return e;
        });
      } else {
        this.totalExercises = this.initialExercises.concat(this.userDefinedExercises);
      }
    }
  }, {
    key: 'storeExercises',
    value: function storeExercises() {
      var exercisesJSON = JSON.stringify(this.userDefinedExercises);
      localStorage.setItem('storedExercises', exercisesJSON);
    }
  }, {
    key: 'retrieveExercises',
    value: function retrieveExercises() {
      var exercisesJSON = localStorage.getItem('storedExercises');
      if (!exercisesJSON) {
        return;
      } else {
        return JSON.parse(exercisesJSON);
      }
    }
  }, {
    key: 'removeStoredExercises',
    value: function removeStoredExercises() {
      localStorage.removeItem('storedExercises');
      this.userDefinedExercises = [];
    }
  }]);

  return ExerciseRepository;
}();

exports.default = ExerciseRepository;

},{"./Exercise":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Streak = function () {
  function Streak() {
    _classCallCheck(this, Streak);

    this.currentStreak = 0;
    this.record = 0;
  }

  _createClass(Streak, [{
    key: 'checkAndUpdateRecord',
    value: function checkAndUpdateRecord() {
      if (this.currentStreak > this.record) {
        this.record = this.currentStreak;
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.currentStreak = 0;
    }
  }, {
    key: 'increment',
    value: function increment() {
      this.currentStreak++;
    }
  }, {
    key: 'storeRecord',
    value: function storeRecord() {
      localStorage.setItem('oneLinerRecord', this.record);
    }
  }, {
    key: 'retrieveRecord',
    value: function retrieveRecord() {
      var retrievedRecord = parseInt(localStorage.getItem('oneLinerRecord'));
      if (!retrievedRecord) {
        return;
      } else {
        this.record = retrievedRecord;
      }
    }
  }, {
    key: 'resetRecord',
    value: function resetRecord() {
      localStorage.removeItem('oneLinerRecord');
      this.record = 0;
    }
  }]);

  return Streak;
}();

exports.default = Streak;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = guid;
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DomRunner = function () {
    function DomRunner(controller) {
        _classCallCheck(this, DomRunner);

        this.controller = controller;
        this.controller.retrieveStored();
    }

    _createClass(DomRunner, [{
        key: 'display',
        value: function display() {
            this.controller.storeRecord();
            document.body.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
            var exerciseContainer = document.getElementById("exerciseContainer");
            exerciseContainer.innerHTML = '';

            var exerciseDisplay = this.createExerciseElements();
            var createExerciseDisplay = this.createAddExerciseElements();
            var removeExercisesButton = this.createRemoveExercisesButton();
            var resetRecordButton = this.createResetRecordButton();

            var displayAddButton = document.createElement("BUTTON");
            displayAddButton.setAttribute("id", "displayAddInterface");
            displayAddButton.style.backgroundColor = 'rgb(40,200,40)';
            displayAddButton.style.color = 'white';
            displayAddButton.innerHTML = 'Add New Exercise';

            var self = this;

            displayAddButton.addEventListener('click', function () {
                createExerciseDisplay.style.display = 'block';
            });

            var streakContainer = document.createElement("DIV");
            streakContainer.setAttribute("id", "streakContainer");

            var streakDisplay = document.createElement("H1");
            streakDisplay.setAttribute("id", "streakDisplay");
            streakDisplay.innerHTML = 'STREAK ' + this.controller.getStreak();

            var recordDisplay = document.createElement("H1");
            recordDisplay.setAttribute("id", "scoreDisplay");
            recordDisplay.innerHTML = 'RECORD ' + this.controller.getRecord();

            streakContainer.appendChild(streakDisplay);
            streakContainer.appendChild(recordDisplay);

            exerciseContainer.appendChild(exerciseDisplay);
            exerciseContainer.appendChild(displayAddButton);
            exerciseContainer.appendChild(removeExercisesButton);
            exerciseContainer.appendChild(resetRecordButton);
            exerciseContainer.appendChild(createExerciseDisplay);
            exerciseContainer.appendChild(streakContainer);

            var solutionInput = document.getElementById("solutionInput");

            solutionInput.focus(); //sets the focus on the new text box
        }
    }, {
        key: 'createExerciseElements',
        value: function createExerciseElements() {
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

            solutionInput.addEventListener('input', function () {
                if (this.value === exercise.solution) {
                    self.controller.incrementStreak();
                    self.controller.checkAndUpdateRecord();
                    self.display();
                } else if (self.controller.checkInput(this.value, exercise.solution)) {
                    this.style.color = 'green';
                    document.body.style.backgroundColor = 'rgba(0,255,0,0.3)';
                } else {
                    self.controller.resetStreak();
                    self.controller.checkAndUpdateRecord();
                    document.getElementById("streakDisplay").innerHTML = 'STREAK ' + self.controller.getStreak();

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
    }, {
        key: 'createAddExerciseElements',
        value: function createAddExerciseElements() {
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
            addExerciseButton.style.backgroundColor = 'rgb(40,200,40)';
            addExerciseButton.style.color = 'white';

            createExerciseDisplay.appendChild(newTaskInput);
            createExerciseDisplay.appendChild(newSolutionInput);
            createExerciseDisplay.appendChild(addExerciseButton);

            var self = this;

            addExerciseButton.addEventListener('click', function () {
                if (newTaskInput.value === '' || newSolutionInput.value === '') {
                    console.log('Please fill out all fields.');
                } else {
                    self.controller.addExercise(newTaskInput.value, newSolutionInput.value);
                    createExerciseDisplay.style.display = 'none';
                    newTaskInput.value = '';
                    newSolutionInput.value = '';
                    self.controller.storeExercises();
                }
            });

            return createExerciseDisplay;
        }
    }, {
        key: 'createRemoveExercisesButton',
        value: function createRemoveExercisesButton() {
            var removeExercisesButton = document.createElement("button");
            removeExercisesButton.setAttribute('id', 'removeExercisesButton');
            removeExercisesButton.innerHTML = 'Remove Stored Exercises';
            removeExercisesButton.style.backgroundColor = 'rgb(200,40,40)';
            removeExercisesButton.style.color = 'white';
            var self = this;
            removeExercisesButton.addEventListener('click', function () {
                self.controller.removeStoredExercises();
                self.controller.setExercises();
                self.display();
            });
            return removeExercisesButton;
        }
    }, {
        key: 'createResetRecordButton',
        value: function createResetRecordButton() {
            var resetRecordButton = document.createElement("button");
            resetRecordButton.setAttribute('id', 'resetRecordButton');
            resetRecordButton.innerHTML = 'Reset Record';
            resetRecordButton.style.backgroundColor = 'rgb(200,40,40)';
            resetRecordButton.style.color = 'white';
            var self = this;
            resetRecordButton.addEventListener('click', function () {
                self.controller.resetRecord();
                self.display();
            });
            return resetRecordButton;
        }
    }, {
        key: 'run',
        value: function run() {
            this.display();
        }
    }]);

    return DomRunner;
}();

exports.default = DomRunner;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL2NvbnRyb2xsZXIvRXhlcmNpc2VDb250cm9sbGVyLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvbW9kZWwvRXhlcmNpc2UuanMiLCJhcHAvc2NyaXB0cy9zcmMvbW9kZWwvRXhlcmNpc2VSZXBvc2l0b3J5LmpzIiwiYXBwL3NjcmlwdHMvc3JjL21vZGVsL1N0cmVhay5qcyIsImFwcC9zY3JpcHRzL3NyYy9tb2RlbC9ndWlkR2VuLmpzIiwiYXBwL3NjcmlwdHMvc3JjL3ZpZXcvRG9tUnVubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCLEc7QUFDbkIsaUJBQWM7QUFBQTs7QUFDWixTQUFLLEtBQUwsR0FBYSxrQ0FBYjtBQUNBLFNBQUssVUFBTCxHQUFrQixpQ0FBdUIsS0FBSyxLQUE1QixDQUFsQjtBQUNBLFNBQUssU0FBTCxHQUFpQix3QkFBYyxLQUFLLFVBQW5CLENBQWpCO0FBQ0Q7Ozs7MEJBRUs7QUFDSixXQUFLLFNBQUwsQ0FBZSxHQUFmO0FBQ0Q7Ozs7OztrQkFUa0IsRzs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUIsa0I7QUFDbkIsOEJBQVksS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBSyxNQUFMLEdBQWMsc0JBQWQ7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBSyxLQUFMLENBQVcsV0FBWCxFQUFQO0FBQ0Q7OzsrQkFFVSxLLEVBQU8sUSxFQUFVO0FBQzFCLGFBQVEsVUFBVSxTQUFTLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsTUFBTSxNQUE1QixDQUFsQjtBQUNEOzs7Z0NBRVcsSSxFQUFNLFEsRUFB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QTRCLEtBQTVCLEdBQW9DLE9BQXBDO0FBQ0EsZ0JBQUksT0FBTyxJQUFYO0FBQ0Esa0NBQXNCLGdCQUF0QixDQUF1QyxPQUF2QyxFQUFnRCxZQUFXO0FBQ3pELHFCQUFLLFVBQUwsQ0FBZ0IscUJBQWhCO0FBQ0EscUJBQUssVUFBTCxDQUFnQixZQUFoQjtBQUNBLHFCQUFLLE9BQUw7QUFDRCxhQUpEO0FBS0EsbUJBQU8scUJBQVA7QUFDRDs7O2tEQUV5QjtBQUN4QixnQkFBSSxvQkFBb0IsU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQXhCO0FBQ0EsOEJBQWtCLFlBQWxCLENBQStCLElBQS9CLEVBQXFDLG1CQUFyQztBQUNBLDhCQUFrQixTQUFsQixHQUE4QixjQUE5QjtBQUNBLDhCQUFrQixLQUFsQixDQUF3QixlQUF4QixHQUEwQyxnQkFBMUM7QUFDQSw4QkFBa0IsS0FBbEIsQ0FBd0IsS0FBeEIsR0FBZ0MsT0FBaEM7QUFDQSxnQkFBSSxPQUFPLElBQVg7QUFDQSw4QkFBa0IsZ0JBQWxCLENBQW1DLE9BQW5DLEVBQTRDLFlBQVc7QUFDckQscUJBQUssVUFBTCxDQUFnQixXQUFoQjtBQUNBLHFCQUFLLE9BQUw7QUFDRCxhQUhEO0FBSUEsbUJBQU8saUJBQVA7QUFDRDs7OzhCQUVLO0FBQ0osaUJBQUssT0FBTDtBQUNEOzs7Ozs7a0JBbExrQixTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IEV4ZXJjaXNlUmVwb3NpdG9yeSBmcm9tICcuL21vZGVsL0V4ZXJjaXNlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCBFeGVyY2lzZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL0V4ZXJjaXNlQ29udHJvbGxlcic7XHJcbmltcG9ydCBEb21SdW5uZXIgZnJvbSAnLi92aWV3L0RvbVJ1bm5lci5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5leFJlcCA9IG5ldyBFeGVyY2lzZVJlcG9zaXRvcnkoKTtcclxuICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBFeGVyY2lzZUNvbnRyb2xsZXIodGhpcy5leFJlcCk7XHJcbiAgICB0aGlzLmRvbVJ1bm5lciA9IG5ldyBEb21SdW5uZXIodGhpcy5jb250cm9sbGVyKTtcclxuICB9XHJcblxyXG4gIHJ1bigpIHtcclxuICAgIHRoaXMuZG9tUnVubmVyLnJ1bigpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgRXhlcmNpc2VSZXBvc2l0b3J5IGZyb20gJy4uL21vZGVsL0V4ZXJjaXNlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCBTdHJlYWsgZnJvbSAnLi4vbW9kZWwvU3RyZWFrJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4ZXJjaXNlQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoZXhSZXApIHtcclxuICAgIHRoaXMuZXhSZXAgPSBleFJlcDtcclxuICAgIHRoaXMuc3RyZWFrID0gbmV3IFN0cmVhaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXhlcmNpc2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5leFJlcC5nZXRFeGVyY2lzZSgpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tJbnB1dChpbnB1dCwgc29sdXRpb24pIHtcclxuICAgIHJldHVybiAoaW5wdXQgPT09IHNvbHV0aW9uLnN1YnN0cmluZygwLCBpbnB1dC5sZW5ndGgpKTtcclxuICB9XHJcblxyXG4gIGFkZEV4ZXJjaXNlKHRhc2ssIHNvbHV0aW9uKSB7XHJcbiAgICByZXR1cm4gdGhpcy5leFJlcC5hZGRFeGVyY2lzZSh0YXNrLCBzb2x1dGlvbik7XHJcbiAgfVxyXG5cclxuICBnZXRTdHJlYWsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdHJlYWsuY3VycmVudFN0cmVhaztcclxuICB9XHJcblxyXG4gIGluY3JlbWVudFN0cmVhaygpIHtcclxuICAgIHRoaXMuc3RyZWFrLmluY3JlbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRTdHJlYWsoKSB7XHJcbiAgICB0aGlzLnN0cmVhay5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVjb3JkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RyZWFrLnJlY29yZDtcclxuICB9XHJcblxyXG4gIGNoZWNrQW5kVXBkYXRlUmVjb3JkKCkge1xyXG4gICAgdGhpcy5zdHJlYWsuY2hlY2tBbmRVcGRhdGVSZWNvcmQoKTtcclxuICB9XHJcblxyXG4gIHN0b3JlUmVjb3JkKCkge1xyXG4gICAgdGhpcy5zdHJlYWsuc3RvcmVSZWNvcmQoKTtcclxuICB9XHJcblxyXG4gIHNldEV4ZXJjaXNlcygpIHtcclxuICAgIHRoaXMuZXhSZXAuc2V0RXhlcmNpc2VzKCk7XHJcbiAgfVxyXG5cclxuICBzdG9yZUV4ZXJjaXNlcygpIHtcclxuICAgIHRoaXMuZXhSZXAuc3RvcmVFeGVyY2lzZXMoKTtcclxuICB9XHJcblxyXG4gIHJldHJpZXZlU3RvcmVkKCkge1xyXG4gICAgdGhpcy5leFJlcC5yZXRyaWV2ZUV4ZXJjaXNlcygpO1xyXG4gICAgdGhpcy5zdHJlYWsucmV0cmlldmVSZWNvcmQoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVN0b3JlZEV4ZXJjaXNlcygpIHtcclxuICAgIHRoaXMuZXhSZXAucmVtb3ZlU3RvcmVkRXhlcmNpc2VzKCk7XHJcbiAgfVxyXG5cclxuICByZXNldFJlY29yZCgpIHtcclxuICAgIHRoaXMuc3RyZWFrLnJlc2V0UmVjb3JkKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gIChuZXcgQXBwKCkucnVuKCkpO1xyXG59O1xyXG4iLCJpbXBvcnQgZ3VpZEdlbiBmcm9tICcuL2d1aWRHZW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhlcmNpc2Uge1xyXG4gIGNvbnN0cnVjdG9yKHRhc2ssIHNvbHV0aW9uKSB7XHJcbiAgICB0aGlzLmlkID0gZ3VpZEdlbigpO1xyXG4gICAgdGhpcy50YXNrID0gdGFzaztcclxuICAgIHRoaXMuc29sdXRpb24gPSBzb2x1dGlvbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEV4ZXJjaXNlIGZyb20gJy4vRXhlcmNpc2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhlcmNpc2VSZXBvc2l0b3J5IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaW5pdGlhbEV4ZXJjaXNlcyA9IFtcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdSZXRyaWV2ZSB0aGUgc2Vjb25kIHdvcmQgZnJvbSB0aGlzIHNlbnRlbmNlIHVzaW5nIHN1YnN0cmluZygpLiBDYWxsIHRoZSBzdHJpbmcgc3RyLicsXHJcbiAgICAgICAgJ3N0ci5zdWJzdHJpbmcoOSwgMTIpOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdSZW1vdmUgXCJBcHBsZVwiIGFuZCBcIk9yYW5nZVwiIGZyb20gdmFyIGFycmF5ID0gW1wiUGluZWFwcGxlXCIsIFwiQXBwbGVcIiwgXCJPcmFuZ2VcIl0gYW5kIGFkZCBcIlBlYXJcIiB1c2luZyBzcGxpY2UoKS4nLFxyXG4gICAgICAgICdhcnJheS5zcGxpY2UoMSwgMiwgXCJQZWFyXCIpOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdBZGQgXCJQZWFyXCIgdG8gdGhlIGJlZ2lubmluZyBvZiB2YXIgYXJyYXknLFxyXG4gICAgICAgICdhcnJheS51bnNoaWZ0KFwiUGVhclwiKTsnXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBFeGVyY2lzZShcclxuICAgICAgICAnQWRkIFwiUGVhclwiIHRvIHRoZSBlbmQgb2YgdmFyIGFycmF5LicsXHJcbiAgICAgICAgJ2FycmF5LnB1c2goXCJQZWFyXCIpOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdUZXN0IGlmIHZhcmlhYmxlIHggaXMgbGVzcyB0aGFuIDMwLicsXHJcbiAgICAgICAgJ3ggPCAzMDsnXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBFeGVyY2lzZShcclxuICAgICAgICAnVGVzdCBpZiB2YXJpYWJsZSB4IGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAyMC4nLFxyXG4gICAgICAgICd4IDw9IDIwOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdSZXR1cm4gdGhlIHByb3BlcnR5IFxcJ2FnZVxcJyBvZiBvYmplY3QgdXNlciB1c2luZyBicmFja2V0cy4nLFxyXG4gICAgICAgICd1c2VyW1xcJ2FnZVxcJ107J1xyXG4gICAgICApLFxyXG4gICAgICBuZXcgRXhlcmNpc2UoXHJcbiAgICAgICAgJ0FkZCBwcm9wZXJ0eSBcXCdzaXplXFwnIHRvIG9iamVjdCB1c2VyIHVzaW5nIGJyYWNrZXRzIGFuZCBzZXQgaXRcXCdzIHZhbHVlIHRvIHRocmVlJyxcclxuICAgICAgICAndXNlcltcXCdzaXplXFwnXSA9IDM7J1xyXG4gICAgICApLFxyXG4gICAgICBuZXcgRXhlcmNpc2UoXHJcbiAgICAgICAgJ0RlbGV0ZSBwcm9wZXJ0eSBcXCdrZXlcXCcgZnJvbSB2YXIgb2JqZWN0LicsXHJcbiAgICAgICAgJ2RlbGV0ZSBvYmplY3RbXFwna2V5XFwnXTsnXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBFeGVyY2lzZShcclxuICAgICAgICAnQ29uY2F0ZW5hdGUgdHdvIHN0cmluZ3M6IFwiYWJjXCIgYW5kIFwiZGVmXCIuJyxcclxuICAgICAgICAnXCJhYmNcIiArIFwiZGVmXCI7J1xyXG4gICAgICApLFxyXG4gICAgICBuZXcgRXhlcmNpc2UoXHJcbiAgICAgICAgJ0dldCBsZW5ndGggb2YgXCJ3b3JkXCIuJyxcclxuICAgICAgICAnXCJ3b3JkXCIubGVuZ3RoOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdDb21wYXJlIDUgYW5kIDcgc3RyaWN0bHkuJyxcclxuICAgICAgICAnNSA9PT0gNzsnXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBFeGVyY2lzZShcclxuICAgICAgICAnVGVzdCBpZiA1IGlzIGV2ZW4uJyxcclxuICAgICAgICAnNSAlIDIgPT09IDA7J1xyXG4gICAgICApLFxyXG4gICAgICBuZXcgRXhlcmNpc2UoXHJcbiAgICAgICAgJ1Rlc3QgaWYgNyBpcyBvZGQuJyxcclxuICAgICAgICAnNyAlIDIgPT09IDE7J1xyXG4gICAgICApLFxyXG4gICAgICBuZXcgRXhlcmNpc2UoXHJcbiAgICAgICAgJ1Rlc3QgaWYgdGhlIHN0cmluZyBcIndvcmRzXCIgaGFzIGFuIGV2ZW4gbGVuZ3RoLicsXHJcbiAgICAgICAgJ1wid29yZHNcIi5sZW5ndGggJSAyID09PSAwOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdUZXN0IGlmIHRoZSBzdHJpbmcgXCJ3b3Jkc1wiIGhhcyBhbiBvZGQgbGVuZ3RoLicsXHJcbiAgICAgICAgJ1wid29yZHNcIi5sZW5ndGggJSAyID09PSAxOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdBdmVyYWdlIDUgYW5kIDknLFxyXG4gICAgICAgICcoNSArIDkpLzI7J1xyXG4gICAgICApLFxyXG4gICAgICBuZXcgRXhlcmNpc2UoXHJcbiAgICAgICAgJ0NvbXB1dGUgdGhlIGFyZWEgb2YgYSB0cmlhbmdsZSB3aXRoIGJhc2UgPSA3IGFuZCBoZWlnaHQgPSAzLicsXHJcbiAgICAgICAgJyg3ICogMykgLyAyOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdBZGQgdGhlIGFycmF5IFsxLCAyXSBhcyBwcm9wZXJ0eSBcXCdncm91cHNcXCcgdG8gb2JqZWN0IFxcJ3VzZXJcXCcuJyxcclxuICAgICAgICAndXNlcltcImdyb3Vwc1wiXSA9IFsxLCAyXTsnXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBFeGVyY2lzZShcclxuICAgICAgICAnR2V0IHRoZSBmaWZ0aCBlbGVtZW50IGZyb20gWzg4LCA5OSwgNDQsIDMsIDIsIDFdLicsXHJcbiAgICAgICAgJ1s4OCwgOTksIDQ0LCAzLCAyLCAxXVs0XTsnXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBFeGVyY2lzZShcclxuICAgICAgICAnR2V0IHRoZSB0aGlyZCBlbGVtZW50IGZyb20gdmFyIGFycmF5ID0gWzg4LCA5OSwgNDQsIDMsIDIsIDFdLicsXHJcbiAgICAgICAgJ2FycmF5WzJdOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdHZXQgdGhlIGZpcnN0IGVsZW1lbnQgZnJvbSBbNSwgNywgOV0gdXNpbmcgW10gbm90YXRpb24uJyxcclxuICAgICAgICAnWzUsIDcsIDldWzBdOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdHZXQgdGhlIGZpcnN0IGVsZW1lbnQgZnJvbSBbNSwgNiwgOV0gdXNpbmcgc2hpZnQoKS4nLFxyXG4gICAgICAgICdbNSwgNiwgOV0uc2hpZnQoKTsnXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBFeGVyY2lzZShcclxuICAgICAgICAnR2V0IHRoZSBsYXN0IGVsZW1lbnQgZnJvbSB2YXIgYXJyYXkgPSBbNSwgNiwgOV0gdXNpbmcgW10uJyxcclxuICAgICAgICAnYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07J1xyXG4gICAgICApLFxyXG4gICAgICBuZXcgRXhlcmNpc2UoXHJcbiAgICAgICAgJ0dldCB0aGUgbGFzdCBlbGVtZW50IGZyb20gdmFyIGFycmF5ID0gWzUsIDYsIDldIHVzaW5nIHBvcCgpLicsXHJcbiAgICAgICAgJ2FycmF5LnBvcCgpOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdBZGQgMSB0byB0aGUgZnJvbnQgb2YgdmFyIGFycmF5ID0gWzUsIDYsIDldLicsXHJcbiAgICAgICAgJ2FycmF5LnVuc2hpZnQoMSk7J1xyXG4gICAgICApLFxyXG4gICAgICBuZXcgRXhlcmNpc2UoXHJcbiAgICAgICAgJ0FkZCAxIHRvIHRoZSBiYWNrIG9mIHZhciBhcnJheSA9IFs1LCA2XS4nLFxyXG4gICAgICAgICdhcnJheS5wdXNoKDEpOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdDb25jYXRlbmF0ZSBhcnJheSBhIGFuZCBhcnJheSBiLicsXHJcbiAgICAgICAgJ2EuY29uY2F0KGIpOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdHZXQgdGhlIHJlbWFpbmRlciBvZiBhcnJheSBhcnIgc3RhcnRpbmcgYXQgaW5kZXggaS4nLFxyXG4gICAgICAgICdhcnIuc2xpY2UoaSk7J1xyXG4gICAgICApLFxyXG4gICAgICBuZXcgRXhlcmNpc2UoXHJcbiAgICAgICAgJ0dldCB0aGUgc3ViYXJyYXkgYmV0d2VlbiBpbmRleCA1IGFuZCA3IG9mIGFycmF5IGFyci4nLFxyXG4gICAgICAgICdhcnIuc2xpY2UoNSwgNyk7J1xyXG4gICAgICApLFxyXG4gICAgICBuZXcgRXhlcmNpc2UoXHJcbiAgICAgICAgJ1VzZSBzbGljZSgpIHRvIHJldHVybiBbNCwgNV0gZnJvbSBbMiwgMywgNCwgNSwgNl0uJyxcclxuICAgICAgICAnWzIsIDMsIDQsIDUsIDZdLnNsaWNlKDIsIDQpOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdVc2Ugc2xpY2UoKSB0byByZXR1cm4gWzIsIDMsIDRdIGZyb20gWzIsIDMsIDQsIDUsIDZdLicsXHJcbiAgICAgICAgJ1syLCAzLCA0LCA1LCA2XS5zbGljZSgwLCAzKTsnXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBFeGVyY2lzZShcclxuICAgICAgICAnVHVybiBcIkFCQ1wiIGludG8gW1wiQVwiLCBcIkJcIiwgXCJDXCJdLicsXHJcbiAgICAgICAgJ1wiQUJDXCIuc3BsaXQoXCJcIik7J1xyXG4gICAgICApLFxyXG4gICAgICBuZXcgRXhlcmNpc2UoXHJcbiAgICAgICAgJ1R1cm4gXCJBIEIgQ1wiIGludG8gW1wiQVwiLCBcIkJcIiwgXCJDXCJdLicsXHJcbiAgICAgICAgJ1wiQSBCIENcIi5zcGxpdChcIiBcIik7J1xyXG4gICAgICApLFxyXG4gICAgICBuZXcgRXhlcmNpc2UoXHJcbiAgICAgICAgJ1JlbW92ZSBvbmUgZWxlbWVudCBmcm9tIGluZGV4IDEgaW4gYXJyYXkgbnVtYmVycyBhbmQgaW5zZXJ0IDcgYW5kIDggaW5zdGVhZC4nLFxyXG4gICAgICAgICdudW1iZXJzLnNwbGljZSgxLCAxLCA3LCA4KTsnXHJcbiAgICAgIClcclxuICAgIF07XHJcbiAgICB0aGlzLnNldEV4ZXJjaXNlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXhlcmNpc2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b3RhbEV4ZXJjaXNlc1soTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50b3RhbEV4ZXJjaXNlcy5sZW5ndGgpKV07XHJcbiAgfVxyXG5cclxuICBhZGRFeGVyY2lzZSh0YXNrLCBzb2x1dGlvbikge1xyXG4gICAgdGhpcy51c2VyRGVmaW5lZEV4ZXJjaXNlcy5wdXNoKG5ldyBFeGVyY2lzZSh0YXNrLCBzb2x1dGlvbikpO1xyXG4gICAgdGhpcy50b3RhbEV4ZXJjaXNlcyA9IHRoaXMuaW5pdGlhbEV4ZXJjaXNlcy5jb25jYXQodGhpcy51c2VyRGVmaW5lZEV4ZXJjaXNlcyk7XHJcbiAgfVxyXG5cclxuICBzZXRFeGVyY2lzZXMoKSB7XHJcbiAgICB0aGlzLnVzZXJEZWZpbmVkRXhlcmNpc2VzID0gdGhpcy5yZXRyaWV2ZUV4ZXJjaXNlcygpO1xyXG4gICAgaWYoIXRoaXMudXNlckRlZmluZWRFeGVyY2lzZXMpIHtcclxuICAgICAgdGhpcy51c2VyRGVmaW5lZEV4ZXJjaXNlcyA9IFtdO1xyXG4gICAgICB0aGlzLnRvdGFsRXhlcmNpc2VzID0gdGhpcy5pbml0aWFsRXhlcmNpc2VzLm1hcChlID0+IGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMudG90YWxFeGVyY2lzZXMgPSB0aGlzLmluaXRpYWxFeGVyY2lzZXMuY29uY2F0KHRoaXMudXNlckRlZmluZWRFeGVyY2lzZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcmVFeGVyY2lzZXMoKSB7XHJcbiAgICB2YXIgZXhlcmNpc2VzSlNPTiA9IEpTT04uc3RyaW5naWZ5KHRoaXMudXNlckRlZmluZWRFeGVyY2lzZXMpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZEV4ZXJjaXNlcycsIGV4ZXJjaXNlc0pTT04pO1xyXG4gIH1cclxuXHJcbiAgcmV0cmlldmVFeGVyY2lzZXMoKSB7XHJcbiAgICB2YXIgZXhlcmNpc2VzSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRFeGVyY2lzZXMnKTtcclxuICAgIGlmKCFleGVyY2lzZXNKU09OKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGV4ZXJjaXNlc0pTT04pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU3RvcmVkRXhlcmNpc2VzKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N0b3JlZEV4ZXJjaXNlcycpO1xyXG4gICAgdGhpcy51c2VyRGVmaW5lZEV4ZXJjaXNlcyA9IFtdO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJlYWt7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRTdHJlYWsgPSAwO1xyXG4gICAgdGhpcy5yZWNvcmQgPSAwO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tBbmRVcGRhdGVSZWNvcmQoKSB7XHJcbiAgICBpZih0aGlzLmN1cnJlbnRTdHJlYWsgPiB0aGlzLnJlY29yZCkge1xyXG4gICAgICB0aGlzLnJlY29yZCA9IHRoaXMuY3VycmVudFN0cmVha1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRTdHJlYWsgPSAwO1xyXG4gIH1cclxuXHJcbiAgaW5jcmVtZW50KCkge1xyXG4gICAgdGhpcy5jdXJyZW50U3RyZWFrKys7XHJcbiAgfVxyXG5cclxuICBzdG9yZVJlY29yZCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvbmVMaW5lclJlY29yZCcsIHRoaXMucmVjb3JkKTtcclxuICB9XHJcblxyXG4gIHJldHJpZXZlUmVjb3JkKCkge1xyXG4gICAgdmFyIHJldHJpZXZlZFJlY29yZCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvbmVMaW5lclJlY29yZCcpKTtcclxuICAgIGlmKCFyZXRyaWV2ZWRSZWNvcmQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZWNvcmQgPSByZXRyaWV2ZWRSZWNvcmQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldFJlY29yZCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdvbmVMaW5lclJlY29yZCcpO1xyXG4gICAgdGhpcy5yZWNvcmQgPSAwO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBndWlkKCkge1xyXG4gIGZ1bmN0aW9uIHM0KCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgLnN1YnN0cmluZygxKTtcclxuICB9XHJcbiAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbVJ1bm5lciB7XHJcbiAgY29uc3RydWN0b3IoY29udHJvbGxlcikge1xyXG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgIHRoaXMuY29udHJvbGxlci5yZXRyaWV2ZVN0b3JlZCgpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheSgpIHtcclxuICAgIHRoaXMuY29udHJvbGxlci5zdG9yZVJlY29yZCgpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAyNTUsIDAsIDAuMyknO1xyXG4gICAgdmFyIGV4ZXJjaXNlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGVyY2lzZUNvbnRhaW5lclwiKTtcclxuICAgIGV4ZXJjaXNlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIHZhciBleGVyY2lzZURpc3BsYXkgPSB0aGlzLmNyZWF0ZUV4ZXJjaXNlRWxlbWVudHMoKTtcclxuICAgIHZhciBjcmVhdGVFeGVyY2lzZURpc3BsYXkgPSB0aGlzLmNyZWF0ZUFkZEV4ZXJjaXNlRWxlbWVudHMoKTtcclxuICAgIHZhciByZW1vdmVFeGVyY2lzZXNCdXR0b24gPSB0aGlzLmNyZWF0ZVJlbW92ZUV4ZXJjaXNlc0J1dHRvbigpO1xyXG4gICAgdmFyIHJlc2V0UmVjb3JkQnV0dG9uID0gdGhpcy5jcmVhdGVSZXNldFJlY29yZEJ1dHRvbigpO1xyXG5cclxuICAgIHZhciBkaXNwbGF5QWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkJVVFRPTlwiKTtcclxuICAgIGRpc3BsYXlBZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkaXNwbGF5QWRkSW50ZXJmYWNlXCIpO1xyXG4gICAgZGlzcGxheUFkZEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDQwLDIwMCw0MCknO1xyXG4gICAgZGlzcGxheUFkZEJ1dHRvbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICBkaXNwbGF5QWRkQnV0dG9uLmlubmVySFRNTCA9ICdBZGQgTmV3IEV4ZXJjaXNlJztcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgZGlzcGxheUFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjcmVhdGVFeGVyY2lzZURpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc3RyZWFrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgIHN0cmVha0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN0cmVha0NvbnRhaW5lclwiKTtcclxuXHJcbiAgICB2YXIgc3RyZWFrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJIMVwiKTtcclxuICAgIHN0cmVha0Rpc3BsYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdHJlYWtEaXNwbGF5XCIpO1xyXG4gICAgc3RyZWFrRGlzcGxheS5pbm5lckhUTUwgPSBgU1RSRUFLICR7dGhpcy5jb250cm9sbGVyLmdldFN0cmVhaygpfWA7XHJcblxyXG4gICAgdmFyIHJlY29yZERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSDFcIik7XHJcbiAgICByZWNvcmREaXNwbGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2NvcmVEaXNwbGF5XCIpO1xyXG4gICAgcmVjb3JkRGlzcGxheS5pbm5lckhUTUwgPSBgUkVDT1JEICR7dGhpcy5jb250cm9sbGVyLmdldFJlY29yZCgpfWA7XHJcblxyXG4gICAgc3RyZWFrQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0cmVha0Rpc3BsYXkpO1xyXG4gICAgc3RyZWFrQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlY29yZERpc3BsYXkpO1xyXG5cclxuICAgIGV4ZXJjaXNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGV4ZXJjaXNlRGlzcGxheSk7XHJcbiAgICBleGVyY2lzZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5QWRkQnV0dG9uKTtcclxuICAgIGV4ZXJjaXNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUV4ZXJjaXNlc0J1dHRvbik7XHJcbiAgICBleGVyY2lzZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNldFJlY29yZEJ1dHRvbik7XHJcbiAgICBleGVyY2lzZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFeGVyY2lzZURpc3BsYXkpO1xyXG4gICAgZXhlcmNpc2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RyZWFrQ29udGFpbmVyKTtcclxuXHJcbiAgICB2YXIgc29sdXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29sdXRpb25JbnB1dFwiKTtcclxuXHJcbiAgICBzb2x1dGlvbklucHV0LmZvY3VzKCk7IC8vc2V0cyB0aGUgZm9jdXMgb24gdGhlIG5ldyB0ZXh0IGJveFxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRXhlcmNpc2VFbGVtZW50cygpIHtcclxuICAgIHZhciBleGVyY2lzZSA9IHRoaXMuY29udHJvbGxlci5nZXRFeGVyY2lzZSgpO1xyXG5cclxuICAgIHZhciB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICB0YXNrRGlzcGxheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tEaXZcIik7XHJcbiAgICB0YXNrRGlzcGxheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpc3BsYXlcIik7XHJcblxyXG4gICAgdmFyIHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuICAgIHRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJFeGVyY2lzZVRhc2tcIik7XHJcbiAgICB0YXNrLmlubmVySFRNTCA9IGV4ZXJjaXNlLnRhc2s7XHJcblxyXG4gICAgdmFyIHNvbHV0aW9uRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICBzb2x1dGlvbkRpc3BsYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzb2x1dGlvbkRpdlwiKTtcclxuICAgIHNvbHV0aW9uRGlzcGxheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpc3BsYXlcIik7XHJcblxyXG4gICAgdmFyIHNvbHV0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcbiAgICBzb2x1dGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic29sdXRpb25JbnB1dFwiKTtcclxuICAgIHNvbHV0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICBzb2x1dGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwic29sdXRpb25cIik7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHNvbHV0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgaWYodGhpcy52YWx1ZSA9PT0gZXhlcmNpc2Uuc29sdXRpb24pIHtcclxuICAgICAgICBzZWxmLmNvbnRyb2xsZXIuaW5jcmVtZW50U3RyZWFrKCk7XHJcbiAgICAgICAgc2VsZi5jb250cm9sbGVyLmNoZWNrQW5kVXBkYXRlUmVjb3JkKCk7XHJcbiAgICAgICAgc2VsZi5kaXNwbGF5KCk7XHJcbiAgICAgIH0gZWxzZSBpZihzZWxmLmNvbnRyb2xsZXIuY2hlY2tJbnB1dCh0aGlzLnZhbHVlLCBleGVyY2lzZS5zb2x1dGlvbikpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLmNvbG9yID0gJ2dyZWVuJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMjU1LDAsMC4zKSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZi5jb250cm9sbGVyLnJlc2V0U3RyZWFrKCk7XHJcbiAgICAgICAgc2VsZi5jb250cm9sbGVyLmNoZWNrQW5kVXBkYXRlUmVjb3JkKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHJlYWtEaXNwbGF5XCIpLmlubmVySFRNTCA9IGBTVFJFQUsgJHtzZWxmLmNvbnRyb2xsZXIuZ2V0U3RyZWFrKCl9YDtcclxuXHJcbiAgICAgICAgdGhpcy5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMjU1LCAwLCAwLCAwLjMpJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgICBzb2x1dGlvbkRpc3BsYXkuYXBwZW5kQ2hpbGQoc29sdXRpb25JbnB1dCk7XHJcblxyXG4gICAgdmFyIGV4ZXJjaXNlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICBleGVyY2lzZURpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0Rpc3BsYXkpO1xyXG4gICAgZXhlcmNpc2VEaXNwbGF5LmFwcGVuZENoaWxkKHNvbHV0aW9uRGlzcGxheSk7XHJcblxyXG4gICAgcmV0dXJuIGV4ZXJjaXNlRGlzcGxheTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFkZEV4ZXJjaXNlRWxlbWVudHMoKSB7XHJcbiAgICB2YXIgY3JlYXRlRXhlcmNpc2VEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgIGNyZWF0ZUV4ZXJjaXNlRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgY3JlYXRlRXhlcmNpc2VEaXNwbGF5LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIHZhciBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcbiAgICBuZXdUYXNrSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdUYXNrSW5wdXRcIik7XHJcbiAgICBuZXdUYXNrSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICBuZXdUYXNrSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgVGFza1wiKTtcclxuXHJcbiAgICB2YXIgbmV3U29sdXRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuICAgIG5ld1NvbHV0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdTb2x1dGlvbklucHV0XCIpO1xyXG4gICAgbmV3U29sdXRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgIG5ld1NvbHV0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgU29sdXRpb25cIik7XHJcblxyXG4gICAgdmFyIGFkZEV4ZXJjaXNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkJVVFRPTlwiKTtcclxuICAgIGFkZEV4ZXJjaXNlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkRXhlcmNpc2VCdXR0b25cIik7XHJcbiAgICBhZGRFeGVyY2lzZUJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkJztcclxuICAgIGFkZEV4ZXJjaXNlQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoNDAsMjAwLDQwKSc7XHJcbiAgICBhZGRFeGVyY2lzZUJ1dHRvbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcblxyXG4gICAgY3JlYXRlRXhlcmNpc2VEaXNwbGF5LmFwcGVuZENoaWxkKG5ld1Rhc2tJbnB1dCk7XHJcbiAgICBjcmVhdGVFeGVyY2lzZURpc3BsYXkuYXBwZW5kQ2hpbGQobmV3U29sdXRpb25JbnB1dCk7XHJcbiAgICBjcmVhdGVFeGVyY2lzZURpc3BsYXkuYXBwZW5kQ2hpbGQoYWRkRXhlcmNpc2VCdXR0b24pO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBhZGRFeGVyY2lzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZihuZXdUYXNrSW5wdXQudmFsdWUgPT09ICcnIHx8IG5ld1NvbHV0aW9uSW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BsZWFzZSBmaWxsIG91dCBhbGwgZmllbGRzLicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGYuY29udHJvbGxlci5hZGRFeGVyY2lzZShuZXdUYXNrSW5wdXQudmFsdWUsIG5ld1NvbHV0aW9uSW5wdXQudmFsdWUpO1xyXG4gICAgICAgIGNyZWF0ZUV4ZXJjaXNlRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIG5ld1NvbHV0aW9uSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICBzZWxmLmNvbnRyb2xsZXIuc3RvcmVFeGVyY2lzZXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNyZWF0ZUV4ZXJjaXNlRGlzcGxheTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVJlbW92ZUV4ZXJjaXNlc0J1dHRvbigpIHtcclxuICAgIHZhciByZW1vdmVFeGVyY2lzZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgcmVtb3ZlRXhlcmNpc2VzQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVtb3ZlRXhlcmNpc2VzQnV0dG9uJyk7XHJcbiAgICByZW1vdmVFeGVyY2lzZXNCdXR0b24uaW5uZXJIVE1MID0gJ1JlbW92ZSBTdG9yZWQgRXhlcmNpc2VzJztcclxuICAgIHJlbW92ZUV4ZXJjaXNlc0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDIwMCw0MCw0MCknO1xyXG4gICAgcmVtb3ZlRXhlcmNpc2VzQnV0dG9uLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJlbW92ZUV4ZXJjaXNlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZWxmLmNvbnRyb2xsZXIucmVtb3ZlU3RvcmVkRXhlcmNpc2VzKCk7XHJcbiAgICAgIHNlbGYuY29udHJvbGxlci5zZXRFeGVyY2lzZXMoKTtcclxuICAgICAgc2VsZi5kaXNwbGF5KCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZW1vdmVFeGVyY2lzZXNCdXR0b247XHJcbiAgfVxyXG5cclxuICBjcmVhdGVSZXNldFJlY29yZEJ1dHRvbigpIHtcclxuICAgIHZhciByZXNldFJlY29yZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICByZXNldFJlY29yZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jlc2V0UmVjb3JkQnV0dG9uJyk7XHJcbiAgICByZXNldFJlY29yZEJ1dHRvbi5pbm5lckhUTUwgPSAnUmVzZXQgUmVjb3JkJztcclxuICAgIHJlc2V0UmVjb3JkQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjAwLDQwLDQwKSc7XHJcbiAgICByZXNldFJlY29yZEJ1dHRvbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXNldFJlY29yZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZWxmLmNvbnRyb2xsZXIucmVzZXRSZWNvcmQoKTtcclxuICAgICAgc2VsZi5kaXNwbGF5KCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXNldFJlY29yZEJ1dHRvbjtcclxuICB9XHJcblxyXG4gIHJ1bigpIHtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxufVxyXG4iXX0=
