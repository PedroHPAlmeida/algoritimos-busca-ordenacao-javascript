function min(array, start, key) {
  let smaller = start;

  for (let current = start; current < array.length; current++) {
    if (array[current][key] < array[smaller][key]) {
      smaller = current;
    }
  }

  return smaller;
}

module.exports = min;
