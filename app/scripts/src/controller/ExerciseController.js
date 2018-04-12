import ExerciseRepository from '../model/ExerciseRepository';
import Streak from '../model/Streak';

export default class ExerciseController {
  constructor(exRep) {
    this.exRep = exRep;
    this.streak = new Streak();
  }

  getExercise() {
    return this.exRep.getExercise();
  }

  checkInput(input, solution) {
    return (input === solution.substring(0, input.length));
  }

  addExercise(task, solution) {
    return this.exRep.addExercise(task, solution);
  }

  getStreak() {
    return this.streak.currentStreak;
  }

  getRecord() {
    return this.streak.record;
  }

  checkAndUpdateRecord() {
    this.streak.checkAndUpdateRecord();
  }

  resetStreak() {
    this.streak.reset();
  }

  incrementStreak() {
    this.streak.increment();
  }
}
