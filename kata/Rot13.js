// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// Please note that using "encode" in Python is considered cheating.

function rot13(message) {
  let msgArr = message.split("");

  let count13 = function(charCode) {
    let times = 13;
    if (charCode >= 65 && charCode <= 90) {
      while (charCode < 90 && times) {
        charCode++;
        times--;
      }
      if (!times) {
        return charCode > 90 ? 65 : charCode;
      } else {
        return times + 65;
      }
    } else if (charCode >= 97 && charCode < 122) {
      while (charCode <= 122 && times) {
        charCode++;
        times--;
      }
      if (!times) {
        return charCode > 122 ? 97 : charCode;
      } else {
        return times + 97;
      }
    } else return charCode;
  };

  let result = [];
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    result[i] = String.fromCharCode(count13(char.charCodeAt(0)));
  }

  return result.join('');
}

// Test.describe("Rot13", function() {
//   Test.it("test", function() {
//     Test.expect(
//       "grfg" == rot13("test"),
//       "Input: test , Expected Output: grfg , Actual Output: " + rot13("test")
//     );
//   });
//   Test.it("Test", function() {
//     Test.expect(
//       "Grfg" == rot13("Test"),
//       "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test")
//     );
//   });
// });
