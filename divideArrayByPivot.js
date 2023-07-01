const alocatePivot = require("./alocatePivot");
const alterPosition = require("./alterPosition");

function divideArrayByPivot(fn_callback, array, left, right) {
  const pivot = array[Math.floor((left + right) / 2)];
  alocatePivot(fn_callback, array, pivot);
  let minors = 0;

  for (let position = 0; position < array.length; position++) {
    let currentItem = array[position];
    if (fn_callback(currentItem, pivot) && currentItem !== pivot) {
      alterPosition(array, position, minors);

      minors++;
    }
  }
  return array;
}

module.exports = divideArrayByPivot;
