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
    key: 'resetStreak',
    value: function resetStreak() {
      this.streak.reset();
    }
  }, {
    key: 'incrementStreak',
    value: function incrementStreak() {
      this.streak.increment();
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

    this.exercises = [new _Exercise2.default('Retrieve the second word from this sentence using substring(). Call the string str.', 'str.substring(9,12);'), new _Exercise2.default('Return an array of all the words in a string using split(). The string is named str.', 'str.split(" ");'), new _Exercise2.default('Return the last element of an array named arr.', 'arr.pop();'), new _Exercise2.default('Return the first element of an array named arr.', 'arr.shift();'), new _Exercise2.default('Remove "Apple" and "Orange" from ["Pineapple", "Apple", "Orange"] and add "Pear" using splice(). The array is named arr.', 'arr.splice(1,2,"Pear");'), new _Exercise2.default('Add "Pear" to the beginning of an array arr.', 'arr.unshift("Pear");'), new _Exercise2.default('Add "Pear" to the end of an array arr.', 'arr.push("Pear");')];
  }

  _createClass(ExerciseRepository, [{
    key: 'getExercise',
    value: function getExercise() {
      return this.exercises[Math.floor(Math.random() * this.exercises.length)];
    }
  }, {
    key: 'addExercise',
    value: function addExercise(task, solution) {
      this.exercises.push(new _Exercise2.default(task, solution));
    }
  }]);

  return ExerciseRepository;
}();

exports.default = ExerciseRepository;

},{"./Exercise":4}],6:[function(require,module,exports){
"use strict";

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
    key: "checkAndUpdateRecord",
    value: function checkAndUpdateRecord() {
      if (this.currentStreak > this.record) {
        this.record = this.currentStreak;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.currentStreak = 0;
    }
  }, {
    key: "increment",
    value: function increment() {
      this.currentStreak++;
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
    }

    _createClass(DomRunner, [{
        key: 'display',
        value: function display() {
            document.body.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
            var exerciseContainer = document.getElementById("exerciseContainer");
            exerciseContainer.innerHTML = '';

            var exerciseDisplay = this.createExerciseElements();
            var createExerciseDisplay = this.createAddExerciseElements();

            var displayAddButton = document.createElement("BUTTON");
            displayAddButton.setAttribute("id", "displayAddInterface");
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
                }
            });

            return createExerciseDisplay;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL2NvbnRyb2xsZXIvRXhlcmNpc2VDb250cm9sbGVyLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvbW9kZWwvRXhlcmNpc2UuanMiLCJhcHAvc2NyaXB0cy9zcmMvbW9kZWwvRXhlcmNpc2VSZXBvc2l0b3J5LmpzIiwiYXBwL3NjcmlwdHMvc3JjL21vZGVsL1N0cmVhay5qcyIsImFwcC9zY3JpcHRzL3NyYy9tb2RlbC9ndWlkR2VuLmpzIiwiYXBwL3NjcmlwdHMvc3JjL3ZpZXcvRG9tUnVubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCLEc7QUFDbkIsaUJBQWM7QUFBQTs7QUFDWixTQUFLLEtBQUwsR0FBYSxrQ0FBYjtBQUNBLFNBQUssVUFBTCxHQUFrQixpQ0FBdUIsS0FBSyxLQUE1QixDQUFsQjtBQUNBLFNBQUssU0FBTCxHQUFpQix3QkFBYyxLQUFLLFVBQW5CLENBQWpCO0FBQ0Q7Ozs7MEJBRUs7QUFDSixXQUFLLFNBQUwsQ0FBZSxHQUFmO0FBQ0Q7Ozs7OztrQkFUa0IsRzs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUIsa0I7QUFDbkIsOEJBQVksS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBSyxNQUFMLEdBQWMsc0JBQWQ7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBSyxLQUFMLENBQVcsV0FBWCxFQUFQO0FBQ0Q7OzsrQkFFVSxLLEVBQU8sUSxFQUFVO0FBQzFCLGFBQVEsVUFBVSxTQUFTLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsTUFBTSxNQUE1QixDQUFsQjtBQUNEOzs7Z0NBRVcsSSxFQUFNLFEsRUFBVTtBQUMxQixhQUFPLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUIsSUFBdkIsRUFBNkIsUUFBN0IsQ0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUssTUFBTCxDQUFZLGFBQW5CO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBSyxNQUFMLENBQVksTUFBbkI7QUFDRDs7OzJDQUVzQjtBQUNyQixXQUFLLE1BQUwsQ0FBWSxvQkFBWjtBQUNEOzs7a0NBRWE7QUFDWixXQUFLLE1BQUwsQ0FBWSxLQUFaO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsV0FBSyxNQUFMLENBQVksU0FBWjtBQUNEOzs7Ozs7a0JBcENrQixrQjs7Ozs7QUNIckI7Ozs7OztBQUVBLE9BQU8sTUFBUCxHQUFnQixZQUFXO0FBQ3hCLHNCQUFVLEdBQVYsRUFBRDtBQUNELENBRkQ7Ozs7Ozs7OztBQ0ZBOzs7Ozs7OztJQUVxQixRLEdBQ25CLGtCQUFZLElBQVosRUFBa0IsUUFBbEIsRUFBNEI7QUFBQTs7QUFDMUIsT0FBSyxFQUFMLEdBQVUsd0JBQVY7QUFDQSxPQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsT0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0QsQzs7a0JBTGtCLFE7Ozs7Ozs7Ozs7O0FDRnJCOzs7Ozs7OztJQUVxQixrQjtBQUNuQixnQ0FBYztBQUFBOztBQUNaLFNBQUssU0FBTCxHQUFpQixDQUNmLHVCQUNFLHFGQURGLEVBRUUsc0JBRkYsQ0FEZSxFQUtmLHVCQUNFLHNGQURGLEVBRUUsaUJBRkYsQ0FMZSxFQVNmLHVCQUNFLGdEQURGLEVBRUUsWUFGRixDQVRlLEVBYWYsdUJBQ0UsaURBREYsRUFFRSxjQUZGLENBYmUsRUFpQmYsdUJBQ0UsMEhBREYsRUFFRSx5QkFGRixDQWpCZSxFQXFCZix1QkFDRSw4Q0FERixFQUVFLHNCQUZGLENBckJlLEVBeUJmLHVCQUNFLHdDQURGLEVBRUUsbUJBRkYsQ0F6QmUsQ0FBakI7QUE4QkQ7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUssU0FBTCxDQUFnQixLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBZ0IsS0FBSyxTQUFMLENBQWUsTUFBMUMsQ0FBaEIsQ0FBUDtBQUNEOzs7Z0NBRVcsSSxFQUFNLFEsRUFBVTtBQUMxQixXQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLHVCQUFhLElBQWIsRUFBbUIsUUFBbkIsQ0FBcEI7QUFDRDs7Ozs7O2tCQXhDa0Isa0I7Ozs7Ozs7Ozs7Ozs7SUNGQSxNO0FBQ25CLG9CQUFjO0FBQUE7O0FBQ1osU0FBSyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsU0FBSyxNQUFMLEdBQWMsQ0FBZDtBQUNEOzs7OzJDQUVzQjtBQUNyQixVQUFHLEtBQUssYUFBTCxHQUFxQixLQUFLLE1BQTdCLEVBQXFDO0FBQ25DLGFBQUssTUFBTCxHQUFjLEtBQUssYUFBbkI7QUFDRDtBQUNGOzs7NEJBRU87QUFDTixXQUFLLGFBQUwsR0FBcUIsQ0FBckI7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBSyxhQUFMO0FBQ0Q7Ozs7OztrQkFsQmtCLE07Ozs7Ozs7O2tCQ0FHLEk7QUFBVCxTQUFTLElBQVQsR0FBZ0I7QUFDN0IsV0FBUyxFQUFULEdBQWM7QUFDWixXQUFPLEtBQUssS0FBTCxDQUFXLENBQUMsSUFBSSxLQUFLLE1BQUwsRUFBTCxJQUFzQixPQUFqQyxFQUNKLFFBREksQ0FDSyxFQURMLEVBRUosU0FGSSxDQUVNLENBRk4sQ0FBUDtBQUdEO0FBQ0QsU0FBTyxPQUFPLElBQVAsR0FBYyxHQUFkLEdBQW9CLElBQXBCLEdBQTJCLEdBQTNCLEdBQWlDLElBQWpDLEdBQXdDLEdBQXhDLEdBQThDLElBQTlDLEdBQXFELEdBQXJELEdBQTJELElBQTNELEdBQWtFLElBQWxFLEdBQXlFLElBQWhGO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7SUNQb0IsUztBQUNuQix1QkFBWSxVQUFaLEVBQXdCO0FBQUE7O0FBQ3RCLGFBQUssVUFBTCxHQUFrQixVQUFsQjtBQUNEOzs7O2tDQUVTO0FBQ1IscUJBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBc0Msc0JBQXRDO0FBQ0EsZ0JBQUksb0JBQW9CLFNBQVMsY0FBVCxDQUF3QixtQkFBeEIsQ0FBeEI7QUFDQSw4QkFBa0IsU0FBbEIsR0FBOEIsRUFBOUI7O0FBRUEsZ0JBQUksa0JBQWtCLEtBQUssc0JBQUwsRUFBdEI7QUFDQSxnQkFBSSx3QkFBd0IsS0FBSyx5QkFBTCxFQUE1Qjs7QUFFQSxnQkFBSSxtQkFBbUIsU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQXZCO0FBQ0EsNkJBQWlCLFlBQWpCLENBQThCLElBQTlCLEVBQW9DLHFCQUFwQztBQUNBLDZCQUFpQixTQUFqQixHQUE2QixrQkFBN0I7O0FBRUEsZ0JBQUksT0FBTyxJQUFYOztBQUVBLDZCQUFpQixnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBVztBQUNwRCxzQ0FBc0IsS0FBdEIsQ0FBNEIsT0FBNUIsR0FBc0MsT0FBdEM7QUFDRCxhQUZEOztBQUlBLGdCQUFJLGtCQUFrQixTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdEI7QUFDQSw0QkFBZ0IsWUFBaEIsQ0FBNkIsSUFBN0IsRUFBbUMsaUJBQW5DOztBQUVBLGdCQUFJLGdCQUFnQixTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDQSwwQkFBYyxZQUFkLENBQTJCLElBQTNCLEVBQWlDLGVBQWpDO0FBQ0EsMEJBQWMsU0FBZCxlQUFvQyxLQUFLLFVBQUwsQ0FBZ0IsU0FBaEIsRUFBcEM7O0FBRUEsZ0JBQUksZ0JBQWdCLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFwQjtBQUNBLDBCQUFjLFlBQWQsQ0FBMkIsSUFBM0IsRUFBaUMsY0FBakM7QUFDQSwwQkFBYyxTQUFkLGVBQW9DLEtBQUssVUFBTCxDQUFnQixTQUFoQixFQUFwQzs7QUFFQSw0QkFBZ0IsV0FBaEIsQ0FBNEIsYUFBNUI7QUFDQSw0QkFBZ0IsV0FBaEIsQ0FBNEIsYUFBNUI7O0FBRUEsOEJBQWtCLFdBQWxCLENBQThCLGVBQTlCO0FBQ0EsOEJBQWtCLFdBQWxCLENBQThCLGdCQUE5QjtBQUNBLDhCQUFrQixXQUFsQixDQUE4QixxQkFBOUI7QUFDQSw4QkFBa0IsV0FBbEIsQ0FBOEIsZUFBOUI7O0FBRUEsZ0JBQUksZ0JBQWdCLFNBQVMsY0FBVCxDQUF3QixlQUF4QixDQUFwQjs7QUFFQSwwQkFBYyxLQUFkLEdBdkNRLENBdUNlO0FBQ3hCOzs7aURBRXdCO0FBQ3ZCLGdCQUFJLFdBQVcsS0FBSyxVQUFMLENBQWdCLFdBQWhCLEVBQWY7O0FBRUEsZ0JBQUksY0FBYyxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQSx3QkFBWSxZQUFaLENBQXlCLElBQXpCLEVBQStCLFNBQS9CO0FBQ0Esd0JBQVksWUFBWixDQUF5QixPQUF6QixFQUFrQyxTQUFsQzs7QUFFQSxnQkFBSSxPQUFPLFNBQVMsYUFBVCxDQUF1QixHQUF2QixDQUFYO0FBQ0EsaUJBQUssWUFBTCxDQUFrQixJQUFsQixFQUF3QixjQUF4QjtBQUNBLGlCQUFLLFNBQUwsR0FBaUIsU0FBUyxJQUExQjs7QUFFQSxnQkFBSSxrQkFBa0IsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQXRCO0FBQ0EsNEJBQWdCLFlBQWhCLENBQTZCLElBQTdCLEVBQW1DLGFBQW5DO0FBQ0EsNEJBQWdCLFlBQWhCLENBQTZCLE9BQTdCLEVBQXNDLFNBQXRDOztBQUVBLGdCQUFJLGdCQUFnQixTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBcEI7QUFDQSwwQkFBYyxZQUFkLENBQTJCLElBQTNCLEVBQWlDLGVBQWpDO0FBQ0EsMEJBQWMsWUFBZCxDQUEyQixNQUEzQixFQUFtQyxNQUFuQztBQUNBLDBCQUFjLFlBQWQsQ0FBMkIsYUFBM0IsRUFBMEMsVUFBMUM7O0FBRUEsZ0JBQUksT0FBTyxJQUFYOztBQUVBLDBCQUFjLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFlBQVc7QUFDakQsb0JBQUcsS0FBSyxLQUFMLEtBQWUsU0FBUyxRQUEzQixFQUFxQztBQUNuQyx5QkFBSyxVQUFMLENBQWdCLGVBQWhCO0FBQ0EseUJBQUssVUFBTCxDQUFnQixvQkFBaEI7QUFDQSx5QkFBSyxPQUFMO0FBQ0QsaUJBSkQsTUFJTyxJQUFHLEtBQUssVUFBTCxDQUFnQixVQUFoQixDQUEyQixLQUFLLEtBQWhDLEVBQXVDLFNBQVMsUUFBaEQsQ0FBSCxFQUE4RDtBQUNuRSx5QkFBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixPQUFuQjtBQUNBLDZCQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQXNDLG1CQUF0QztBQUNELGlCQUhNLE1BR0E7QUFDTCx5QkFBSyxVQUFMLENBQWdCLFdBQWhCO0FBQ0EseUJBQUssVUFBTCxDQUFnQixvQkFBaEI7QUFDQSw2QkFBUyxjQUFULENBQXdCLGVBQXhCLEVBQXlDLFNBQXpDLGVBQStELEtBQUssVUFBTCxDQUFnQixTQUFoQixFQUEvRDs7QUFFQSx5QkFBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixLQUFuQjtBQUNBLDZCQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQXNDLHNCQUF0QztBQUNEO0FBQ0YsYUFoQkQ7O0FBa0JBLHdCQUFZLFdBQVosQ0FBd0IsSUFBeEI7QUFDQSw0QkFBZ0IsV0FBaEIsQ0FBNEIsYUFBNUI7O0FBRUEsZ0JBQUksa0JBQWtCLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtBQUNBLDRCQUFnQixXQUFoQixDQUE0QixXQUE1QjtBQUNBLDRCQUFnQixXQUFoQixDQUE0QixlQUE1Qjs7QUFFQSxtQkFBTyxlQUFQO0FBQ0Q7OztvREFFMkI7QUFDMUIsZ0JBQUksd0JBQXdCLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUE1QjtBQUNBLGtDQUFzQixLQUF0QixDQUE0QixPQUE1QixHQUFzQyxNQUF0QztBQUNBLGtDQUFzQixTQUF0QixHQUFrQyxFQUFsQzs7QUFFQSxnQkFBSSxlQUFlLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFuQjtBQUNBLHlCQUFhLFlBQWIsQ0FBMEIsSUFBMUIsRUFBZ0MsY0FBaEM7QUFDQSx5QkFBYSxZQUFiLENBQTBCLE1BQTFCLEVBQWtDLE1BQWxDO0FBQ0EseUJBQWEsWUFBYixDQUEwQixhQUExQixFQUF5QyxVQUF6Qzs7QUFFQSxnQkFBSSxtQkFBbUIsU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQXZCO0FBQ0EsNkJBQWlCLFlBQWpCLENBQThCLElBQTlCLEVBQW9DLGtCQUFwQztBQUNBLDZCQUFpQixZQUFqQixDQUE4QixNQUE5QixFQUFzQyxNQUF0QztBQUNBLDZCQUFpQixZQUFqQixDQUE4QixhQUE5QixFQUE2QyxjQUE3Qzs7QUFFQSxnQkFBSSxvQkFBb0IsU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQXhCO0FBQ0EsOEJBQWtCLFlBQWxCLENBQStCLElBQS9CLEVBQXFDLG1CQUFyQztBQUNBLDhCQUFrQixTQUFsQixHQUE4QixLQUE5Qjs7QUFFQSxrQ0FBc0IsV0FBdEIsQ0FBa0MsWUFBbEM7QUFDQSxrQ0FBc0IsV0FBdEIsQ0FBa0MsZ0JBQWxDO0FBQ0Esa0NBQXNCLFdBQXRCLENBQWtDLGlCQUFsQzs7QUFFQSxnQkFBSSxPQUFPLElBQVg7O0FBRUEsOEJBQWtCLGdCQUFsQixDQUFtQyxPQUFuQyxFQUE0QyxZQUFXO0FBQ3JELG9CQUFHLGFBQWEsS0FBYixLQUF1QixFQUF2QixJQUE2QixpQkFBaUIsS0FBakIsS0FBMkIsRUFBM0QsRUFBK0Q7QUFDN0QsNEJBQVEsR0FBUixDQUFZLDZCQUFaO0FBQ0QsaUJBRkQsTUFFTztBQUNMLHlCQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsYUFBYSxLQUF6QyxFQUFnRCxpQkFBaUIsS0FBakU7QUFDQSwwQ0FBc0IsS0FBdEIsQ0FBNEIsT0FBNUIsR0FBc0MsTUFBdEM7QUFDQSxpQ0FBYSxLQUFiLEdBQXFCLEVBQXJCO0FBQ0EscUNBQWlCLEtBQWpCLEdBQXlCLEVBQXpCO0FBQ0Q7QUFDRixhQVREOztBQVdBLG1CQUFPLHFCQUFQO0FBQ0Q7Ozs4QkFFSztBQUNKLGlCQUFLLE9BQUw7QUFDRDs7Ozs7O2tCQTFJa0IsUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBFeGVyY2lzZVJlcG9zaXRvcnkgZnJvbSAnLi9tb2RlbC9FeGVyY2lzZVJlcG9zaXRvcnknO1xyXG5pbXBvcnQgRXhlcmNpc2VDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci9FeGVyY2lzZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgRG9tUnVubmVyIGZyb20gJy4vdmlldy9Eb21SdW5uZXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZXhSZXAgPSBuZXcgRXhlcmNpc2VSZXBvc2l0b3J5KCk7XHJcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgRXhlcmNpc2VDb250cm9sbGVyKHRoaXMuZXhSZXApO1xyXG4gICAgdGhpcy5kb21SdW5uZXIgPSBuZXcgRG9tUnVubmVyKHRoaXMuY29udHJvbGxlcik7XHJcbiAgfVxyXG5cclxuICBydW4oKSB7XHJcbiAgICB0aGlzLmRvbVJ1bm5lci5ydW4oKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEV4ZXJjaXNlUmVwb3NpdG9yeSBmcm9tICcuLi9tb2RlbC9FeGVyY2lzZVJlcG9zaXRvcnknO1xyXG5pbXBvcnQgU3RyZWFrIGZyb20gJy4uL21vZGVsL1N0cmVhayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGVyY2lzZUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKGV4UmVwKSB7XHJcbiAgICB0aGlzLmV4UmVwID0gZXhSZXA7XHJcbiAgICB0aGlzLnN0cmVhayA9IG5ldyBTdHJlYWsoKTtcclxuICB9XHJcblxyXG4gIGdldEV4ZXJjaXNlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXhSZXAuZ2V0RXhlcmNpc2UoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrSW5wdXQoaW5wdXQsIHNvbHV0aW9uKSB7XHJcbiAgICByZXR1cm4gKGlucHV0ID09PSBzb2x1dGlvbi5zdWJzdHJpbmcoMCwgaW5wdXQubGVuZ3RoKSk7XHJcbiAgfVxyXG5cclxuICBhZGRFeGVyY2lzZSh0YXNrLCBzb2x1dGlvbikge1xyXG4gICAgcmV0dXJuIHRoaXMuZXhSZXAuYWRkRXhlcmNpc2UodGFzaywgc29sdXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RyZWFrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RyZWFrLmN1cnJlbnRTdHJlYWs7XHJcbiAgfVxyXG5cclxuICBnZXRSZWNvcmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdHJlYWsucmVjb3JkO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tBbmRVcGRhdGVSZWNvcmQoKSB7XHJcbiAgICB0aGlzLnN0cmVhay5jaGVja0FuZFVwZGF0ZVJlY29yZCgpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRTdHJlYWsoKSB7XHJcbiAgICB0aGlzLnN0cmVhay5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgaW5jcmVtZW50U3RyZWFrKCkge1xyXG4gICAgdGhpcy5zdHJlYWsuaW5jcmVtZW50KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gIChuZXcgQXBwKCkucnVuKCkpO1xyXG59O1xyXG4iLCJpbXBvcnQgZ3VpZEdlbiBmcm9tICcuL2d1aWRHZW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhlcmNpc2Uge1xyXG4gIGNvbnN0cnVjdG9yKHRhc2ssIHNvbHV0aW9uKSB7XHJcbiAgICB0aGlzLmlkID0gZ3VpZEdlbigpO1xyXG4gICAgdGhpcy50YXNrID0gdGFzaztcclxuICAgIHRoaXMuc29sdXRpb24gPSBzb2x1dGlvbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEV4ZXJjaXNlIGZyb20gJy4vRXhlcmNpc2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhlcmNpc2VSZXBvc2l0b3J5IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZXhlcmNpc2VzID0gW1xyXG4gICAgICBuZXcgRXhlcmNpc2UoXHJcbiAgICAgICAgJ1JldHJpZXZlIHRoZSBzZWNvbmQgd29yZCBmcm9tIHRoaXMgc2VudGVuY2UgdXNpbmcgc3Vic3RyaW5nKCkuIENhbGwgdGhlIHN0cmluZyBzdHIuJyxcclxuICAgICAgICAnc3RyLnN1YnN0cmluZyg5LDEyKTsnXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBFeGVyY2lzZShcclxuICAgICAgICAnUmV0dXJuIGFuIGFycmF5IG9mIGFsbCB0aGUgd29yZHMgaW4gYSBzdHJpbmcgdXNpbmcgc3BsaXQoKS4gVGhlIHN0cmluZyBpcyBuYW1lZCBzdHIuJyxcclxuICAgICAgICAnc3RyLnNwbGl0KFwiIFwiKTsnXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBFeGVyY2lzZShcclxuICAgICAgICAnUmV0dXJuIHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkgbmFtZWQgYXJyLicsXHJcbiAgICAgICAgJ2Fyci5wb3AoKTsnXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBFeGVyY2lzZShcclxuICAgICAgICAnUmV0dXJuIHRoZSBmaXJzdCBlbGVtZW50IG9mIGFuIGFycmF5IG5hbWVkIGFyci4nLFxyXG4gICAgICAgICdhcnIuc2hpZnQoKTsnXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBFeGVyY2lzZShcclxuICAgICAgICAnUmVtb3ZlIFwiQXBwbGVcIiBhbmQgXCJPcmFuZ2VcIiBmcm9tIFtcIlBpbmVhcHBsZVwiLCBcIkFwcGxlXCIsIFwiT3JhbmdlXCJdIGFuZCBhZGQgXCJQZWFyXCIgdXNpbmcgc3BsaWNlKCkuIFRoZSBhcnJheSBpcyBuYW1lZCBhcnIuJyxcclxuICAgICAgICAnYXJyLnNwbGljZSgxLDIsXCJQZWFyXCIpOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdBZGQgXCJQZWFyXCIgdG8gdGhlIGJlZ2lubmluZyBvZiBhbiBhcnJheSBhcnIuJyxcclxuICAgICAgICAnYXJyLnVuc2hpZnQoXCJQZWFyXCIpOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdBZGQgXCJQZWFyXCIgdG8gdGhlIGVuZCBvZiBhbiBhcnJheSBhcnIuJyxcclxuICAgICAgICAnYXJyLnB1c2goXCJQZWFyXCIpOydcclxuICAgICAgKVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGdldEV4ZXJjaXNlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXhlcmNpc2VzWyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmV4ZXJjaXNlcy5sZW5ndGgpKV07XHJcbiAgfVxyXG5cclxuICBhZGRFeGVyY2lzZSh0YXNrLCBzb2x1dGlvbikge1xyXG4gICAgdGhpcy5leGVyY2lzZXMucHVzaChuZXcgRXhlcmNpc2UodGFzaywgc29sdXRpb24pKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyZWFre1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jdXJyZW50U3RyZWFrID0gMDtcclxuICAgIHRoaXMucmVjb3JkID0gMDtcclxuICB9XHJcblxyXG4gIGNoZWNrQW5kVXBkYXRlUmVjb3JkKCkge1xyXG4gICAgaWYodGhpcy5jdXJyZW50U3RyZWFrID4gdGhpcy5yZWNvcmQpIHtcclxuICAgICAgdGhpcy5yZWNvcmQgPSB0aGlzLmN1cnJlbnRTdHJlYWtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5jdXJyZW50U3RyZWFrID0gMDtcclxuICB9XHJcblxyXG4gIGluY3JlbWVudCgpIHtcclxuICAgIHRoaXMuY3VycmVudFN0cmVhaysrO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBndWlkKCkge1xyXG4gIGZ1bmN0aW9uIHM0KCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgLnN1YnN0cmluZygxKTtcclxuICB9XHJcbiAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbVJ1bm5lciB7XHJcbiAgY29uc3RydWN0b3IoY29udHJvbGxlcikge1xyXG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICB9XHJcblxyXG4gIGRpc3BsYXkoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsIDI1NSwgMCwgMC4zKSc7XHJcbiAgICB2YXIgZXhlcmNpc2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4ZXJjaXNlQ29udGFpbmVyXCIpO1xyXG4gICAgZXhlcmNpc2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgdmFyIGV4ZXJjaXNlRGlzcGxheSA9IHRoaXMuY3JlYXRlRXhlcmNpc2VFbGVtZW50cygpO1xyXG4gICAgdmFyIGNyZWF0ZUV4ZXJjaXNlRGlzcGxheSA9IHRoaXMuY3JlYXRlQWRkRXhlcmNpc2VFbGVtZW50cygpO1xyXG5cclxuICAgIHZhciBkaXNwbGF5QWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkJVVFRPTlwiKTtcclxuICAgIGRpc3BsYXlBZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkaXNwbGF5QWRkSW50ZXJmYWNlXCIpO1xyXG4gICAgZGlzcGxheUFkZEJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkIE5ldyBFeGVyY2lzZSc7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGRpc3BsYXlBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgY3JlYXRlRXhlcmNpc2VEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHN0cmVha0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICBzdHJlYWtDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdHJlYWtDb250YWluZXJcIik7XHJcblxyXG4gICAgdmFyIHN0cmVha0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSDFcIik7XHJcbiAgICBzdHJlYWtEaXNwbGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RyZWFrRGlzcGxheVwiKTtcclxuICAgIHN0cmVha0Rpc3BsYXkuaW5uZXJIVE1MID0gYFNUUkVBSyAke3RoaXMuY29udHJvbGxlci5nZXRTdHJlYWsoKX1gO1xyXG5cclxuICAgIHZhciByZWNvcmREaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkgxXCIpO1xyXG4gICAgcmVjb3JkRGlzcGxheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNjb3JlRGlzcGxheVwiKTtcclxuICAgIHJlY29yZERpc3BsYXkuaW5uZXJIVE1MID0gYFJFQ09SRCAke3RoaXMuY29udHJvbGxlci5nZXRSZWNvcmQoKX1gO1xyXG5cclxuICAgIHN0cmVha0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdHJlYWtEaXNwbGF5KTtcclxuICAgIHN0cmVha0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZWNvcmREaXNwbGF5KTtcclxuXHJcbiAgICBleGVyY2lzZUNvbnRhaW5lci5hcHBlbmRDaGlsZChleGVyY2lzZURpc3BsYXkpO1xyXG4gICAgZXhlcmNpc2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUFkZEJ1dHRvbik7XHJcbiAgICBleGVyY2lzZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFeGVyY2lzZURpc3BsYXkpO1xyXG4gICAgZXhlcmNpc2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RyZWFrQ29udGFpbmVyKTtcclxuXHJcbiAgICB2YXIgc29sdXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29sdXRpb25JbnB1dFwiKTtcclxuXHJcbiAgICBzb2x1dGlvbklucHV0LmZvY3VzKCk7IC8vc2V0cyB0aGUgZm9jdXMgb24gdGhlIG5ldyB0ZXh0IGJveFxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRXhlcmNpc2VFbGVtZW50cygpIHtcclxuICAgIHZhciBleGVyY2lzZSA9IHRoaXMuY29udHJvbGxlci5nZXRFeGVyY2lzZSgpO1xyXG5cclxuICAgIHZhciB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICB0YXNrRGlzcGxheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tEaXZcIik7XHJcbiAgICB0YXNrRGlzcGxheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpc3BsYXlcIik7XHJcblxyXG4gICAgdmFyIHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuICAgIHRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJFeGVyY2lzZVRhc2tcIik7XHJcbiAgICB0YXNrLmlubmVySFRNTCA9IGV4ZXJjaXNlLnRhc2s7XHJcblxyXG4gICAgdmFyIHNvbHV0aW9uRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICBzb2x1dGlvbkRpc3BsYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzb2x1dGlvbkRpdlwiKTtcclxuICAgIHNvbHV0aW9uRGlzcGxheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpc3BsYXlcIik7XHJcblxyXG4gICAgdmFyIHNvbHV0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcbiAgICBzb2x1dGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic29sdXRpb25JbnB1dFwiKTtcclxuICAgIHNvbHV0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICBzb2x1dGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwic29sdXRpb25cIik7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHNvbHV0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgaWYodGhpcy52YWx1ZSA9PT0gZXhlcmNpc2Uuc29sdXRpb24pIHtcclxuICAgICAgICBzZWxmLmNvbnRyb2xsZXIuaW5jcmVtZW50U3RyZWFrKCk7XHJcbiAgICAgICAgc2VsZi5jb250cm9sbGVyLmNoZWNrQW5kVXBkYXRlUmVjb3JkKCk7XHJcbiAgICAgICAgc2VsZi5kaXNwbGF5KCk7XHJcbiAgICAgIH0gZWxzZSBpZihzZWxmLmNvbnRyb2xsZXIuY2hlY2tJbnB1dCh0aGlzLnZhbHVlLCBleGVyY2lzZS5zb2x1dGlvbikpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLmNvbG9yID0gJ2dyZWVuJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMjU1LDAsMC4zKSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZi5jb250cm9sbGVyLnJlc2V0U3RyZWFrKCk7XHJcbiAgICAgICAgc2VsZi5jb250cm9sbGVyLmNoZWNrQW5kVXBkYXRlUmVjb3JkKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHJlYWtEaXNwbGF5XCIpLmlubmVySFRNTCA9IGBTVFJFQUsgJHtzZWxmLmNvbnRyb2xsZXIuZ2V0U3RyZWFrKCl9YDtcclxuXHJcbiAgICAgICAgdGhpcy5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMjU1LCAwLCAwLCAwLjMpJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgICBzb2x1dGlvbkRpc3BsYXkuYXBwZW5kQ2hpbGQoc29sdXRpb25JbnB1dCk7XHJcblxyXG4gICAgdmFyIGV4ZXJjaXNlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICBleGVyY2lzZURpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0Rpc3BsYXkpO1xyXG4gICAgZXhlcmNpc2VEaXNwbGF5LmFwcGVuZENoaWxkKHNvbHV0aW9uRGlzcGxheSk7XHJcblxyXG4gICAgcmV0dXJuIGV4ZXJjaXNlRGlzcGxheTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFkZEV4ZXJjaXNlRWxlbWVudHMoKSB7XHJcbiAgICB2YXIgY3JlYXRlRXhlcmNpc2VEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgIGNyZWF0ZUV4ZXJjaXNlRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgY3JlYXRlRXhlcmNpc2VEaXNwbGF5LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIHZhciBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcbiAgICBuZXdUYXNrSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdUYXNrSW5wdXRcIik7XHJcbiAgICBuZXdUYXNrSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICBuZXdUYXNrSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgVGFza1wiKTtcclxuXHJcbiAgICB2YXIgbmV3U29sdXRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuICAgIG5ld1NvbHV0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdTb2x1dGlvbklucHV0XCIpO1xyXG4gICAgbmV3U29sdXRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgIG5ld1NvbHV0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgU29sdXRpb25cIik7XHJcblxyXG4gICAgdmFyIGFkZEV4ZXJjaXNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkJVVFRPTlwiKTtcclxuICAgIGFkZEV4ZXJjaXNlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkRXhlcmNpc2VCdXR0b25cIik7XHJcbiAgICBhZGRFeGVyY2lzZUJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkJztcclxuXHJcbiAgICBjcmVhdGVFeGVyY2lzZURpc3BsYXkuYXBwZW5kQ2hpbGQobmV3VGFza0lucHV0KTtcclxuICAgIGNyZWF0ZUV4ZXJjaXNlRGlzcGxheS5hcHBlbmRDaGlsZChuZXdTb2x1dGlvbklucHV0KTtcclxuICAgIGNyZWF0ZUV4ZXJjaXNlRGlzcGxheS5hcHBlbmRDaGlsZChhZGRFeGVyY2lzZUJ1dHRvbik7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGFkZEV4ZXJjaXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmKG5ld1Rhc2tJbnB1dC52YWx1ZSA9PT0gJycgfHwgbmV3U29sdXRpb25JbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUGxlYXNlIGZpbGwgb3V0IGFsbCBmaWVsZHMuJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZi5jb250cm9sbGVyLmFkZEV4ZXJjaXNlKG5ld1Rhc2tJbnB1dC52YWx1ZSwgbmV3U29sdXRpb25JbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgY3JlYXRlRXhlcmNpc2VEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgbmV3VGFza0lucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgbmV3U29sdXRpb25JbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY3JlYXRlRXhlcmNpc2VEaXNwbGF5O1xyXG4gIH1cclxuXHJcbiAgcnVuKCkge1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
