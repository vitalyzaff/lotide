const assertEqual = require('./assertEqualTest');
const head = require('../head.js');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");