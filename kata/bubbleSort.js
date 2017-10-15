// Write a bubble sort Algorithm to sort an Array
// Complexity: O(n^2)

function bubbleSort(array, comparator) {
  function comparatorFn(a, b) {
    return a - b;
  }
  let comp = comparator || comparatorFn;
  let arr = array.slice();
  let iteration = arr.length;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < iteration; j++) {
      if (comp(arr[j], arr[j + 1]) > 0) {
        // Reverse values at indexes
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    // Reduce iteration: Largest values fully sorted
    iteration -= 1;
  }
  return arr;
}
