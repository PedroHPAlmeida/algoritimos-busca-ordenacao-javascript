function alterPosition(array, firstItemPosition, secondItemPosition) {
  const firstItem = array[firstItemPosition];
  const secondItem = array[secondItemPosition];
  array[firstItemPosition] = secondItem;
  array[secondItemPosition] = firstItem;
}

module.exports = alterPosition;
