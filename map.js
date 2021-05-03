const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const words = ["ground", "control", "to", "major", "tom"];

// const first = words.map(char => char[0]);
// console.log(first);

const firstChar = function(item) {
  let char = '';
  char = item[0];
  return char;
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


// assertArraysEqual(map(words, firstChar), [ 'g', 'c', 't', 'm', 't' ]);


