function joinSortedArrays(fn_callback, first_arr, second_arr) {
  let joinedArray = [];
  let currentPositionFirstArray = 0;
  let currentPositionSecondArray = 0;

  while (
    currentPositionFirstArray < first_arr.length &&
    currentPositionSecondArray < second_arr.length
  ) {
    let currentItemFirstArray = first_arr[currentPositionFirstArray];
    let currentItemSecondArray = second_arr[currentPositionSecondArray];

    if (fn_callback(currentItemFirstArray, currentItemSecondArray)) {
      joinedArray.push(currentItemFirstArray);
      currentPositionFirstArray++;
    } else {
      joinedArray.push(currentItemSecondArray);
      currentPositionSecondArray++;
    }
  }
  joinedArray.push(...first_arr.slice(currentPositionFirstArray));
  joinedArray.push(...second_arr.slice(currentPositionSecondArray));
  return joinedArray;
}

module.exports = joinSortedArrays;
