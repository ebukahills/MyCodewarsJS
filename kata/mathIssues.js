// Problem Statement

// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()


// Solution

Math.round = function(number) {
  let numAfterDigit;
  if (number !== parseInt(number)) {
    numAfterDigit = number.toString().split('.')[1][0];
  }
  if (parseInt(numAfterDigit) >= 5 ) {
    return parseInt(number) + 1;
  } else {
    return parseInt(number);
  }
};

Math.ceil = function(number) {
  if (number !== parseInt(number)) {
    return parseInt(number) + 1;    
  } else {
    return number;
  }
};

Math.floor = function(number) {
  return parseInt(number);
};
