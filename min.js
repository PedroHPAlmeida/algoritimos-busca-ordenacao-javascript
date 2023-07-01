function min(fn_callback, array, start) {
  let smaller = start;

  for (let current = start; current < array.length; current++) {
    if (fn_callback(array[current], array[smaller])) {
      smaller = current;
    }
  }

  return smaller;
}

module.exports = min;
