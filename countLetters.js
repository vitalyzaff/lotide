const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let noSpaces = '';
  const result = {};
  for (const char of string) {
    if (char !== ' ') {
      noSpaces += char;
    }
  }
  for (const char of noSpaces) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  } return console.log(result);
};

countLetters('lighthouse in the house');

