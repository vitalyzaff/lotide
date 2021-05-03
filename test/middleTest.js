const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1, 2, 3, 9, 5, 6]), [3, 9]);
assertArraysEqual(middle(['hello', 'why', 'bye']), ['why']);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]), []);