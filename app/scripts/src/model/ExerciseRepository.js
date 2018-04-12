import Exercise from './Exercise';

export default class ExerciseRepository {
  constructor() {
    this.exercises = [
      new Exercise(
        'Retrieve the second word from this string using substring(). The string is named str.',
        'str.substring(9, 12);'
      ),
      new Exercise(
        'Return an array of all the words in string \'str\' using split().',
        'str.split(" ");'
      ),
      new Exercise(
        'Return the last element of array \'arr\'.',
        'arr.pop();'
      ),
      new Exercise(
        'Return the first element of array \'arr\'.',
        'arr.shift();'
      ),
      new Exercise(
        'Remove "Apple" and "Orange" from array \'arr\' ["Pineapple", "Apple", "Orange"] and add "Pear" using splice().',
        'arr.splice(1, 2, "Pear");'
      )
    ];
  }

  getExercise() {
    return this.exercises[(Math.floor(Math.random() * this.exercises.length))];
  }
}
