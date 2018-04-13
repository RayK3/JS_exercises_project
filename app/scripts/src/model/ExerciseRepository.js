import Exercise from './Exercise';

export default class ExerciseRepository {
  constructor() {
    this.initialExercises = [
      new Exercise(
        'Retrieve the second word from this sentence using substring(). Call the string str.',
        'str.substring(9, 12);'
      ),
      new Exercise(
        'Remove "Apple" and "Orange" from var array = ["Pineapple", "Apple", "Orange"] and add "Pear" using splice().',
        'array.splice(1, 2, "Pear");'
      ),
      new Exercise(
        'Add "Pear" to the beginning of var array',
        'array.unshift("Pear");'
      ),
      new Exercise(
        'Add "Pear" to the end of var array.',
        'array.push("Pear");'
      ),
      new Exercise(
        'Test if variable x is less than 30.',
        'x < 30;'
      ),
      new Exercise(
        'Test if variable x is less than or equal to 20.',
        'x <= 20;'
      ),
      new Exercise(
        'Return the property \'age\' of object user using brackets.',
        'user[\'age\'];'
      ),
      new Exercise(
        'Add property \'size\' to object user using brackets and set it\'s value to three',
        'user[\'size\'] = 3;'
      ),
      new Exercise(
        'Delete property \'key\' from var object.',
        'delete object[\'key\'];'
      ),
      new Exercise(
        'Concatenate two strings: "abc" and "def".',
        '"abc" + "def";'
      ),
      new Exercise(
        'Get length of "word".',
        '"word".length;'
      ),
      new Exercise(
        'Compare 5 and 7 strictly.',
        '5 === 7;'
      ),
      new Exercise(
        'Test if 5 is even.',
        '5 % 2 === 0;'
      ),
      new Exercise(
        'Test if 7 is odd.',
        '7 % 2 === 1;'
      ),
      new Exercise(
        'Test if the string "words" has an even length.',
        '"words".length % 2 === 0;'
      ),
      new Exercise(
        'Test if the string "words" has an odd length.',
        '"words".length % 2 === 1;'
      ),
      new Exercise(
        'Average 5 and 9',
        '(5 + 9)/2;'
      ),
      new Exercise(
        'Compute the area of a triangle with base = 7 and height = 3.',
        '(7 * 3) / 2;'
      ),
      new Exercise(
        'Add the array [1, 2] as property \'groups\' to object \'user\'.',
        'user["groups"] = [1, 2];'
      ),
      new Exercise(
        'Get the fifth element from [88, 99, 44, 3, 2, 1].',
        '[88, 99, 44, 3, 2, 1][4];'
      ),
      new Exercise(
        'Get the third element from var array = [88, 99, 44, 3, 2, 1].',
        'array[2];'
      ),
      new Exercise(
        'Get the first element from [5, 7, 9] using [] notation.',
        '[5, 7, 9][0];'
      ),
      new Exercise(
        'Get the first element from [5, 6, 9] using shift().',
        '[5, 6, 9].shift();'
      ),
      new Exercise(
        'Get the last element from var array = [5, 6, 9] using [].',
        'array[array.length - 1];'
      ),
      new Exercise(
        'Get the last element from var array = [5, 6, 9] using pop().',
        'array.pop();'
      ),
      new Exercise(
        'Add 1 to the front of var array = [5, 6, 9].',
        'array.unshift(1);'
      ),
      new Exercise(
        'Add 1 to the back of var array = [5, 6].',
        'array.push(1);'
      ),
      new Exercise(
        'Concatenate array a and array b.',
        'a.concat(b);'
      ),
      new Exercise(
        'Get the remainder of array arr starting at index i.',
        'arr.slice(i);'
      ),
      new Exercise(
        'Get the subarray between index 5 and 7 of array arr.',
        'arr.slice(5, 7);'
      ),
      new Exercise(
        'Use slice() to return [4, 5] from [2, 3, 4, 5, 6].',
        '[2, 3, 4, 5, 6].slice(2, 4);'
      ),
      new Exercise(
        'Use slice() to return [2, 3, 4] from [2, 3, 4, 5, 6].',
        '[2, 3, 4, 5, 6].slice(0, 3);'
      ),
      new Exercise(
        'Turn "ABC" into ["A", "B", "C"].',
        '"ABC".split("");'
      ),
      new Exercise(
        'Turn "A B C" into ["A", "B", "C"].',
        '"A B C".split(" ");'
      ),
      new Exercise(
        'Remove one element from index 1 in array numbers and insert 7 and 8 instead.',
        'numbers.splice(1, 1, 7, 8);'
      )
    ];
    this.setExercises();
  }

  getExercise() {
    return this.totalExercises[(Math.floor(Math.random() * this.totalExercises.length))];
  }

  addExercise(task, solution) {
    this.userDefinedExercises.push(new Exercise(task, solution));
    this.totalExercises = this.initialExercises.concat(this.userDefinedExercises);
  }

  setExercises() {
    this.userDefinedExercises = this.retrieveExercises();
    if(!this.userDefinedExercises) {
      this.userDefinedExercises = [];
      this.totalExercises = this.initialExercises.map(e => e);
    }
    else {
      this.totalExercises = this.initialExercises.concat(this.userDefinedExercises);
    }
  }

  storeExercises() {
    var exercisesJSON = JSON.stringify(this.userDefinedExercises);
    localStorage.setItem('storedExercises', exercisesJSON);
  }

  retrieveExercises() {
    var exercisesJSON = localStorage.getItem('storedExercises');
    if(!exercisesJSON) {
      return;
    } else {
      return JSON.parse(exercisesJSON);
    }
  }

  removeStoredExercises() {
    localStorage.removeItem('storedExercises');
    this.userDefinedExercises = [];
  }
}
