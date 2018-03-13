'use strict'

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function generate(testLengthArray){
  // var result = new Array;
  // if (testLengthArray.length >= 4) {
  //   for (var i = 0; i < testLengthArray.length; i++) {
  //     var input = new Array;
  //     for (var j = 0; j < testLengthArray[i]; j++) {
  //       input.push(Math.random(-10000,10000));
  //     }
  //     sort(input);
  //     var target;
  //     target = Math.random (10000, -10000);
  //     result.push( {
  //       'input': input,
  //       'target': target,
  //       'output': Search(input, target)
  //     }
  //     );
  //   }
  //   FindLocation(input, target);
  // }
  // return result;  

  var result = [];

  testLengthArray.forEach((item, index) => {
    var object = {};
    object.input = [];
    for (let i = 0; i < item; i++) {
      object.input.push(getRandomNumber(-10000, 10000));
    } 
    object.target = object.input[getRandomNumber(0, item)];
    object.output = object.input.indexOf(object.target);
    result.push(object);
  });
}

function FindLocation(input, target) {
  for (var i = 0; i < input.length; i++) {
      if (input[i] != target)
      return "Not Found";
      else if (input[i] == target && i == 0)
      return "First Index";
      else if (input[i] == target && i == input.length - 1)
      return "Last Index";
      else 
      return "MiddleIndex";
  }
}

function Search(input, target) {
  for (var i = 0; i < target.length; i++) {
    if (input[i] == target)
      return i;
      else return -1;
  }
}

function sort(input) {
  for (var i = 0; i < input.length; i++) {
    for (var j = i + 1; j < input.length; j++) {
      var temp;
      if (input[i] > input[j]) {
          temp = input[i];
          input[i] = input[j];
          input[j] = temp;
      }
    }
  }
  return input;
}

module.exports = generate
