const books = require("./books");

const alterPosition = require("./alterPosition");

function insertionSort(array, key) {
  for (let current = 0; current < array.length; current++) {
    let currentItemPosition = current;

    while (
      currentItemPosition > 0 &&
      array[currentItemPosition][key] < array[currentItemPosition - 1][key]
    ) {
      alterPosition(array, currentItemPosition, currentItemPosition - 1);

      currentItemPosition--;
    }
  }

  return array;
}

console.log(insertionSort(books, "price"));
