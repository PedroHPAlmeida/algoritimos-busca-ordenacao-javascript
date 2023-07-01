const alterPosition = require("./alterPosition");

function partition(fn_callback, array, left, right) {
  let pivot = array[Math.floor((left + right) / 2)];
  let currentLeft = left;
  let currentRight = right;

  while (currentLeft <= currentRight) {
    while (fn_callback(array[currentLeft], pivot)) {
      currentLeft++;
    }

    while (fn_callback(pivot, array[currentRight])) {
      currentRight--;
    }

    if (currentLeft <= currentRight) {
      alterPosition(array, currentLeft, currentRight);
      currentLeft++;
      currentRight--;
    }
  }
  return currentLeft;
}

module.exports = partition;
