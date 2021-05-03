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


const letterPositions = function(sentence) {
  const result = {};
  const space = ' ';
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (result[char]) {
      result[char].push(i);
    } else {
      result[char] = [i];
    }
  } delete result[space];
  return console.log(result);
};

module.exports = letterPositions;


// letterPositions('lighthouse in the house');

