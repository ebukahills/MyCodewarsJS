// My friend John and I are members of the "Fat to Fit Club (FFC)".
// John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers.
// The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:

// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

function orderWeight(strng) {
  // Split string into array of individual numbers
  let strArr = strng.split(' ');

  let weightObj = [];
  // Calculate individual weights
  strArr.forEach(function(val, i) {
    let weight = val.split('').reduce(function(prev, next) {
      return parseInt(prev) + parseInt(next);
    }, 0)
    // Populate weightObj array with objects of value - weight keys
    weightObj.push({value: val, weight: weight});
  });
  
  // Define a comparison function for sorting weightObj according to individual weights: low to high
  let compare = function(a, b) {
    if (a.weight < b.weight) {
      return -1;
    } else if (a.weight > b.weight) {
      return 1
    }
    // Sort by string value if weights are the same - See Lines 10-14 above
    if (a.value < b.value) {
      return -1;
    } else if (a.value > b.value) {
      return 1;
    }
    return 0;
  }

  // Sort weightObj with the compare function
  weightObj.sort(compare);

  let resultArr = [];

  // Populate resultArr Array with sorted values
  weightObj.forEach(function(val) {
    resultArr.push(val.value);
  })

  // Log all variables to console to confirm values
  console.log(strng, '\n', strArr, '\n', weightObj, '\n', resultArr);

  // Join resultArr values and return as string
  return resultArr.join(' ');
}


// Sample Tests

// Test.describe("Order Weights",function() {
// Test.it("Basic tests",function() {
//     Test.assertEquals(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
//     Test.assertEquals(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
// })})