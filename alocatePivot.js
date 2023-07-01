function alocatePivot(fn_callback, array, pivot) {
  let minors = 0;

  for (
    let currentPosition = 0;
    currentPosition < array.length;
    currentPosition++
  ) {
    let currentItem = array[currentPosition];

    if (fn_callback(currentItem, pivot)) {
      minors++;
    }
  }

  alterPosition(array, array.indexOf(pivot), minors);

  return array;
}

module.exports = alocatePivot;
