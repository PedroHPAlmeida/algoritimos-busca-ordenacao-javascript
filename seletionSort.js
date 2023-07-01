const min = require("./min");
const alterPosition = require("./alterPosition");

function selectionSort(fn_callback, array) {
  for (let current = 0; current < array.length - 1; current++) {
    let minValue = min(fn_callback, array, current);
    alterPosition(array, current, minValue);
  }
  
  return array;
}

const array = require("./books");
console.log(selectionSort((a, b) => a.price < b.price, array));
