import ExerciseRepository from '../model/ExerciseRepository';

export default class ExerciseController {
  constructor(exRep) {
    this.exRep = exRep;
  }

  getExercise() {
    return this.exRep.getExercise();
  }

  checkInput(input, solution) {
    if(input === solution.substring(0, input.length)) {
      return true;
    }
    else {
      return false;
    }
  }
}
