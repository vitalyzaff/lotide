const tail = require('../tail');
const assertEqual = require('./assertEqualTest');

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // original array should still have 3 elements!