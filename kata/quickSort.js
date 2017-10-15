// Write a QuickSort Algorithm to sort an Array
// Complexity: O(n log n)

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = array[Math.floor(array.length / 2)];

  let lower = array.filter(i => i < pivot);
  let higher = array.filter(i => i > pivot);
  let equals = array.filter(i => i === pivot).slice(1);

  return [...quickSort(lower), pivot, ...equals, ...quickSort(higher)];
}
