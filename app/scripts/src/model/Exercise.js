import guidGen from './guidGen';

export default class Exercise {
  constructor(task, solution) {
    this.id = guidGen();
    this.task = task;
    this.solution = solution;
  }
}
