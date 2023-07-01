const partition = require("./partition");

function quickSort(fn_callback, array, left, right) {
  if (left < right) {
    let currentPosition = partition(fn_callback, array, left, right);
    if (left < currentPosition - 1) {
      quickSort(fn_callback, array, left, currentPosition - 1);
    }
    if (currentPosition < right) {
      quickSort(fn_callback, array, currentPosition, right);
    }
  }
  return array;
}

module.exports = quickSort;

const books = require("./books");
console.log(quickSort((a, b) => a.price < b.price, books, 0, books.length - 1));
