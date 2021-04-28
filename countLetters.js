const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const noSpaces = function(string) {
  let noSpaces = '';
  for (const char of string) {
    if (char !== ' ') {
      noSpaces += char;
    }
  } return noSpaces;
};


const countLetters = function(string) {
  const result = {};
  for (const char of noSpaces(string)) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  } return console.log(result);
};

countLetters('lighthouse in the house');

