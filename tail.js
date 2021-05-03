const assertEqual = require('./test/assertEqualTest');

const tail = function(array) {
  let arr = array.slice(1);
  return arr;
};

module.exports = tail;
