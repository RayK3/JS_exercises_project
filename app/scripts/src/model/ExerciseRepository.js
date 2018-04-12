import Exercise from './Exercise';

export default class ExerciseRepository {
  constructor() {
    this.exercises = [
      new Exercise(
        'Retrieve the second word from this sentence using substring(). Call the string str.',
        'str.substring(9,12);'
      ),
      new Exercise(
        'Return an array of all the words in a string using split(). The string is named str.',
        'str.split(" ");'
      ),
      new Exercise(
        'Return the last element of an array named arr.',
        'arr.pop();'
      ),
      new Exercise(
        'Return the first element of an array named arr.',
        'arr.shift();'
      ),
      new Exercise(
        'Remove "Apple" and "Orange" from ["Pineapple", "Apple", "Orange"] and add "Pear" using splice(). The array is named arr.',
        'arr.splice(1,2,"Pear");'
      ),
      new Exercise(
        'Add "Pear" to the beginning of an array arr.',
        'arr.unshift("Pear");'
      ),
      new Exercise(
        'Add "Pear" to the end of an array arr.',
        'arr.push("Pear");'
      )
    ];
  }

  getExercise() {
    return this.exercises[(Math.floor(Math.random() * this.exercises.length))];
  }

  addExercise(task, solution) {
    this.exercises.push(new Exercise(task, solution));
  }
}
