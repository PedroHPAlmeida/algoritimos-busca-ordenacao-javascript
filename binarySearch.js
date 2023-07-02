function binarySearch(fn_callback, array, from, to, element) {
  if (from > to) {
    return -1;
  }

  const middle = Math.floor((from + to) / 2);
  const currentItem = array[middle];

  const comparedItems = fn_callback(element, currentItem);
  if (comparedItems === 0) {
    return middle;
  }
  if (comparedItems < 0) {
    return binarySearch(fn_callback, array, from, middle - 1, element);
  }
  if (comparedItems > 0) {
    return binarySearch(fn_callback, array, middle + 1, to, element);
  }
}

const books = require("./ordenedBooks");
console.log(
  binarySearch((a, b) => a.price - b.price, books, 0, books.length - 1, {
    title: "Elixir",
    price: 50,
  })
);
