import ExerciseRepository from './model/ExerciseRepository';
import ExerciseController from './controller/ExerciseController';
import DomRunner from './view/DomRunner.js';

export default class App {
  constructor() {
    this.exRep = new ExerciseRepository();
    this.controller = new ExerciseController(this.exRep);
    this.domRunner = new DomRunner(this.controller);
  }

  run() {
    this.domRunner.run();
  }
}
