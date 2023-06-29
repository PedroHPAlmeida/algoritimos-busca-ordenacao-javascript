const array1 = [1, 3, 5, 7, 9];
const array2 = [0, 2, 4, 6, 8, 10];

function biggestAndSmallestArray(first_array, second_array) {
  const arrays = [first_array, second_array];
  const arraysSortedByLength = arrays.sort((a, b) => a.length - b.length);
  return {
    biggestArray: arraysSortedByLength.pop(),
    smallestArray: arraysSortedByLength.pop(),
  };
}

const [biggestArray, smallestArray] = biggestAndSmallestArray(array1, array2);

for (let position = 0; position < smallestArray.length; position++) {
  const arrayJoined = [];
  if (biggestArray[position] < smallestArray[position]) {
  }
}
