const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // PASSED
assertArraysEqual([1, 2, 3], [3, 2, 1]); // FAILED
assertArraysEqual([1, 2, 3], [1, 2, 3]); // PASSED
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // FAILED