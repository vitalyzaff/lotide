const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // PASSED
assertArraysEqual([1, 2, 3], [3, 2, 1]); // FAILED
assertArraysEqual([1, 2, 3], [1, 2, 3]); // PASSED
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // FAILED