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


const without = function(source, remove) {
  let bool;
  let notPresent = [];
  for (let i = 0; i < source.length; i++) {
    bool = remove.includes(source[i]);
    if (bool === false) {
      notPresent.push(source[i]);
    }
  } return console.log(notPresent);
};


without([1, 8, 9,], [9]);
without([1, 2, 3], [1]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);






