const array = require("./books");

const min = require("./min");

const alterPosition = require("./alterPosition");

function selectionSort(array, key) {
  for (let current = 0; current < array.length - 1; current++) {
    let minValue = min(array, current, key);

    alterPosition(array, current, minValue);
  }

  return array;
}

console.log(selectionSort(array, "price"));
