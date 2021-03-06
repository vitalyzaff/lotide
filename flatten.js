const flatten = function(array) {
  const result = [];
  array.forEach(i => {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  });
  return result;
};
module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]]));