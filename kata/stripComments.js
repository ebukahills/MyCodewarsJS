// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
// Any whitespace at the end of the line should also be stripped out.

// Example:
// Given an input string of:

//   apples, pears # and bananas
//   grapes
//   bananas !apples

// The output expected would be:

//   apples, pears
//   grapes
//   bananas

// SOLUTION:

function solution(input, markers){
  let resultArr = [];

  // Initialize variable used to determine if string is after comment
  let op = 1;

  // Loop through the input string
  for (let i = 0; i < input.length; i++) {
    // If character matches any comment marker, set op to 0
    if (markers.indexOf(input[i]) >= 0) {
      op = 0;
    } else if (input[i] === '\n') {
      op = 1;
      // check if line ends with a space and remove it
      resultArr[resultArr.length - 1] === ' ' ? resultArr.pop() : null;
      resultArr.push('\n');
    } else {
      // If op is 1, string is before comment, else, ignore it
      if(op) {
        resultArr.push(input[i]);        
      }
    }
  }
  // Create string from resultArr and trim to remove space from the end
  return resultArr.join('').trim();
}

// TEST

// describe("Solution", function(){
//   it("should test the solution function", function(){
//     Test.assertEquals(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]), "apples, pears\ngrapes\nbananas", "Test Strip Comments");
//   });
// });