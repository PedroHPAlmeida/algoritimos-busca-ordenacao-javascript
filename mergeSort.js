const joinSortedArrays = require("./joinSortedArrays");

function mergeSort(fn_callback, array) {
  if (array.length > 1) {
    let [firstPartOfArray, secondPartOfArray] = divideArray(array);
    firstPartOfArray = mergeSort(fn_callback, firstPartOfArray);
    secondPartOfArray = mergeSort(fn_callback, secondPartOfArray);
    array = joinSortedArrays(fn_callback, firstPartOfArray, secondPartOfArray);
  }
  return array;
}

function divideArray(array) {
  const middle = Math.floor(array.length / 2);
  const firstPartOfArray = array.slice(0, middle);
  const secondPartOfArray = array.slice(middle);
  return [firstPartOfArray, secondPartOfArray];
}

module.exports = mergeSort;
