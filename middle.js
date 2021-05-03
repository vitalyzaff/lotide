const middle = function(array) {
  let length = array.length;
  let middleItemIndex = 0;
  let arr = [];
  if (length > 2 && length % 2 === 1) {
    middleItemIndex = (length - 1) / 2;
    arr.push(array[middleItemIndex]);
  } else if (length > 2 && length % 2 === 0) {
    middleItemIndex = length / 2;
    arr.push(array[middleItemIndex - 1]);
    arr.push(array[middleItemIndex]);
  }
  return arr;
};

module.exports = middle;

middle([1, 2, 3, 9, 5, 6]);
middle(['hello', 'why', 'bye']);
middle([1]);
middle([1, 2]);