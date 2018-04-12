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

},{"./controller/ExerciseController":2,"./model/ExerciseRepository":5,"./view/DomRunner.js":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ExerciseRepository = require('../model/ExerciseRepository');

var _ExerciseRepository2 = _interopRequireDefault(_ExerciseRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExerciseController = function () {
  function ExerciseController(exRep) {
    _classCallCheck(this, ExerciseController);

    this.exRep = exRep;
  }

  _createClass(ExerciseController, [{
    key: 'getExercise',
    value: function getExercise() {
      return this.exRep.getExercise();
    }
  }, {
    key: 'checkInput',
    value: function checkInput(input, solution) {
      if (input === solution.substring(0, input.length)) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return ExerciseController;
}();

exports.default = ExerciseController;

},{"../model/ExerciseRepository":5}],3:[function(require,module,exports){
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

},{"./guidGen":6}],5:[function(require,module,exports){
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

    this.exercises = [new _Exercise2.default('Retrieve the second word from this string using substring(). The string is named str.', 'str.substring(9, 12);'), new _Exercise2.default('Return an array of all the words in string \'str\' using split().', 'str.split(" ");'), new _Exercise2.default('Return the last element of array \'arr\'.', 'arr.pop();'), new _Exercise2.default('Return the first element of array \'arr\'.', 'arr.shift();'), new _Exercise2.default('Remove "Apple" and "Orange" from array \'arr\' ["Pineapple", "Apple", "Orange"] and add "Pear" using splice().', 'arr.splice(1, 2, "Pear");')];
  }

  _createClass(ExerciseRepository, [{
    key: 'getExercise',
    value: function getExercise() {
      return this.exercises[Math.floor(Math.random() * this.exercises.length)];
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
exports.default = guid;
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

},{}],7:[function(require,module,exports){
"use strict";

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
    key: "giveExercise",
    value: function giveExercise() {
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
      container.appendChild(taskDisplay).appendChild(solutionDisplay);

      var self = this;

      solution.addEventListener('input', function () {
        self.controller.checkInput(this.value, exercise.solution) ? this.style.color = 'green' : this.style.color = 'red';
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.giveExercise();
    }
  }]);

  return DomRunner;
}();

exports.default = DomRunner;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL2NvbnRyb2xsZXIvRXhlcmNpc2VDb250cm9sbGVyLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvbW9kZWwvRXhlcmNpc2UuanMiLCJhcHAvc2NyaXB0cy9zcmMvbW9kZWwvRXhlcmNpc2VSZXBvc2l0b3J5LmpzIiwiYXBwL3NjcmlwdHMvc3JjL21vZGVsL2d1aWRHZW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvdmlldy9Eb21SdW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUIsRztBQUNuQixpQkFBYztBQUFBOztBQUNaLFNBQUssS0FBTCxHQUFhLGtDQUFiO0FBQ0EsU0FBSyxVQUFMLEdBQWtCLGlDQUF1QixLQUFLLEtBQTVCLENBQWxCO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLHdCQUFjLEtBQUssVUFBbkIsQ0FBakI7QUFDRDs7OzswQkFFSztBQUNKLFdBQUssU0FBTCxDQUFlLEdBQWY7QUFDRDs7Ozs7O2tCQVRrQixHOzs7Ozs7Ozs7OztBQ0pyQjs7Ozs7Ozs7SUFFcUIsa0I7QUFDbkIsOEJBQVksS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUssS0FBTCxDQUFXLFdBQVgsRUFBUDtBQUNEOzs7K0JBRVUsSyxFQUFPLFEsRUFBVTtBQUMxQixVQUFHLFVBQVUsU0FBUyxTQUFULENBQW1CLENBQW5CLEVBQXNCLE1BQU0sTUFBNUIsQ0FBYixFQUFrRDtBQUNoRCxlQUFPLElBQVA7QUFDRCxPQUZELE1BR0s7QUFDSCxlQUFPLEtBQVA7QUFDRDtBQUNGOzs7Ozs7a0JBaEJrQixrQjs7Ozs7QUNGckI7Ozs7OztB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QVc7QUFDNUMsYUFBSyxVQUFMLENBQWdCLFVBQWhCLENBQTJCLEtBQUssS0FBaEMsRUFBdUMsU0FBUyxRQUFoRCxJQUNBLEtBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsT0FEbkIsR0FDNkIsS0FBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixLQURoRDtBQUVELE9BSEQ7QUFJRDs7OzBCQUVLO0FBQ0osV0FBSyxZQUFMO0FBQ0Q7Ozs7OztrQkF6Q2tCLFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgRXhlcmNpc2VSZXBvc2l0b3J5IGZyb20gJy4vbW9kZWwvRXhlcmNpc2VSZXBvc2l0b3J5JztcclxuaW1wb3J0IEV4ZXJjaXNlQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvRXhlcmNpc2VDb250cm9sbGVyJztcclxuaW1wb3J0IERvbVJ1bm5lciBmcm9tICcuL3ZpZXcvRG9tUnVubmVyLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmV4UmVwID0gbmV3IEV4ZXJjaXNlUmVwb3NpdG9yeSgpO1xyXG4gICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEV4ZXJjaXNlQ29udHJvbGxlcih0aGlzLmV4UmVwKTtcclxuICAgIHRoaXMuZG9tUnVubmVyID0gbmV3IERvbVJ1bm5lcih0aGlzLmNvbnRyb2xsZXIpO1xyXG4gIH1cclxuXHJcbiAgcnVuKCkge1xyXG4gICAgdGhpcy5kb21SdW5uZXIucnVuKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBFeGVyY2lzZVJlcG9zaXRvcnkgZnJvbSAnLi4vbW9kZWwvRXhlcmNpc2VSZXBvc2l0b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4ZXJjaXNlQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoZXhSZXApIHtcclxuICAgIHRoaXMuZXhSZXAgPSBleFJlcDtcclxuICB9XHJcblxyXG4gIGdldEV4ZXJjaXNlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXhSZXAuZ2V0RXhlcmNpc2UoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrSW5wdXQoaW5wdXQsIHNvbHV0aW9uKSB7XHJcbiAgICBpZihpbnB1dCA9PT0gc29sdXRpb24uc3Vic3RyaW5nKDAsIGlucHV0Lmxlbmd0aCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAobmV3IEFwcCgpLnJ1bigpKTtcclxufTtcclxuIiwiaW1wb3J0IGd1aWRHZW4gZnJvbSAnLi9ndWlkR2VuJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4ZXJjaXNlIHtcclxuICBjb25zdHJ1Y3Rvcih0YXNrLCBzb2x1dGlvbikge1xyXG4gICAgdGhpcy5pZCA9IGd1aWRHZW4oKTtcclxuICAgIHRoaXMudGFzayA9IHRhc2s7XHJcbiAgICB0aGlzLnNvbHV0aW9uID0gc29sdXRpb247XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBFeGVyY2lzZSBmcm9tICcuL0V4ZXJjaXNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4ZXJjaXNlUmVwb3NpdG9yeSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmV4ZXJjaXNlcyA9IFtcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdSZXRyaWV2ZSB0aGUgc2Vjb25kIHdvcmQgZnJvbSB0aGlzIHN0cmluZyB1c2luZyBzdWJzdHJpbmcoKS4gVGhlIHN0cmluZyBpcyBuYW1lZCBzdHIuJyxcclxuICAgICAgICAnc3RyLnN1YnN0cmluZyg5LCAxMik7J1xyXG4gICAgICApLFxyXG4gICAgICBuZXcgRXhlcmNpc2UoXHJcbiAgICAgICAgJ1JldHVybiBhbiBhcnJheSBvZiBhbGwgdGhlIHdvcmRzIGluIHN0cmluZyBcXCdzdHJcXCcgdXNpbmcgc3BsaXQoKS4nLFxyXG4gICAgICAgICdzdHIuc3BsaXQoXCIgXCIpOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdSZXR1cm4gdGhlIGxhc3QgZWxlbWVudCBvZiBhcnJheSBcXCdhcnJcXCcuJyxcclxuICAgICAgICAnYXJyLnBvcCgpOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdSZXR1cm4gdGhlIGZpcnN0IGVsZW1lbnQgb2YgYXJyYXkgXFwnYXJyXFwnLicsXHJcbiAgICAgICAgJ2Fyci5zaGlmdCgpOydcclxuICAgICAgKSxcclxuICAgICAgbmV3IEV4ZXJjaXNlKFxyXG4gICAgICAgICdSZW1vdmUgXCJBcHBsZVwiIGFuZCBcIk9yYW5nZVwiIGZyb20gYXJyYXkgXFwnYXJyXFwnIFtcIlBpbmVhcHBsZVwiLCBcIkFwcGxlXCIsIFwiT3JhbmdlXCJdIGFuZCBhZGQgXCJQZWFyXCIgdXNpbmcgc3BsaWNlKCkuJyxcclxuICAgICAgICAnYXJyLnNwbGljZSgxLCAyLCBcIlBlYXJcIik7J1xyXG4gICAgICApXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXhlcmNpc2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5leGVyY2lzZXNbKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZXhlcmNpc2VzLmxlbmd0aCkpXTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ3VpZCgpIHtcclxuICBmdW5jdGlvbiBzNCgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG4gICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgfVxyXG4gIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEb21SdW5uZXIge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcclxuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgfVxyXG5cclxuICBnaXZlRXhlcmNpc2UoKSB7XHJcbiAgICB2YXIgZXhlcmNpc2UgPSB0aGlzLmNvbnRyb2xsZXIuZ2V0RXhlcmNpc2UoKTtcclxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4ZXJjaXNlQ29udGFpbmVyXCIpO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIHZhciB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICB0YXNrRGlzcGxheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tEaXZcIik7XHJcbiAgICB0YXNrRGlzcGxheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpc3BsYXlcIik7XHJcbiAgICB2YXIgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG4gICAgdGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tcIik7XHJcblxyXG4gICAgdGFzay5pbm5lckhUTUwgPSBleGVyY2lzZS50YXNrO1xyXG5cclxuICAgIHZhciBzb2x1dGlvbkRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgc29sdXRpb25EaXNwbGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic29sdXRpb25EaXZcIik7XHJcbiAgICBzb2x1dGlvbkRpc3BsYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkaXNwbGF5XCIpO1xyXG4gICAgdmFyIHNvbHV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xyXG4gICAgc29sdXRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzb2x1dGlvblwiKTtcclxuICAgIHNvbHV0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgc29sdXRpb24uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJzb2x1dGlvblwiKTtcclxuXHJcbiAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrKTtcclxuICAgIHNvbHV0aW9uRGlzcGxheS5hcHBlbmRDaGlsZChzb2x1dGlvbik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpc3BsYXkpXHJcbiAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoc29sdXRpb25EaXNwbGF5KTtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc29sdXRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgc2VsZi5jb250cm9sbGVyLmNoZWNrSW5wdXQodGhpcy52YWx1ZSwgZXhlcmNpc2Uuc29sdXRpb24pID9cclxuICAgICAgdGhpcy5zdHlsZS5jb2xvciA9ICdncmVlbicgOiB0aGlzLnN0eWxlLmNvbG9yID0gJ3JlZCc7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJ1bigpIHtcclxuICAgIHRoaXMuZ2l2ZUV4ZXJjaXNlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
