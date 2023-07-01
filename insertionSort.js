const alterPosition = require("./alterPosition");

function insertionSort(fn_callback, array) {
  for (let current = 0; current < array.length; current++) {
    let currentItemPosition = current;
    while (
      currentItemPosition > 0 &&
      fn_callback(array[currentItemPosition], array[currentItemPosition - 1])
    ) {
      alterPosition(array, currentItemPosition, currentItemPosition - 1);
      currentItemPosition--;
    }
  }
  return array;
}
