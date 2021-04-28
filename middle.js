// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const middle = function(array) {
  let length = array.length;
  let middleItemIndex = 0;
  let arr = [];
  if (length > 2 && length % 2 === 1) {
    middleItemIndex = (length - 1) / 2;
    arr.push(array[middleItemIndex]);
  } else if (length > 2 && length % 2 === 0) {
    middleItemIndex = length / 2;
    arr.push(array[middleItemIndex - 1]);
    arr.push(array[middleItemIndex]);
  }
  return console.log(arr);
};

middle([1, 2, 3, 9, 5, 6]);
middle(['hello', 'why', 'bye']);
middle([1]);
middle([1, 2]);