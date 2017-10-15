// Write a Binary Search Algorithm to find an item in a fully sorted Array
// Complexity O(log n)
// NOTE: Array must be fully sorted

function binarySearch(array, item) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    let guess = array[mid];

    if (guess === item) {
      // item found
      return mid;
    }
    if (guess > item) {
      // guess is greater, search Left
      high = mid - 1;
    } else {
      // guess is lower, search Right
      low = mid + 1;
    }
  }

  // Item not found. Return null
  return null;
}
