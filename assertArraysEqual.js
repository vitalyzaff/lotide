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

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // PASSED
assertArraysEqual([1, 2, 3], [3, 2, 1]); // FAILED
assertArraysEqual([1, 2, 3], [1, 2, 3]); // PASSED
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // FAILED