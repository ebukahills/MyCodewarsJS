/**
 * Consider the following numbers (where n! is factorial(n)):

u1 = (1 / 1!) * (1!)

u2 = (1 / 2!) * (1! + 2!)

u3 = (1 / 3!) * (1! + 2! + 3!)

un = (1 / n!) * (1! + 2! + 3! + ... + n!)

Which will win: 1 / n! or (1! + 2! + 3! + ... + n!)?

Are these number going to 0 because of 1/n! or to infinity due to the sum of factorials?

#Task: Calculate (1 / n!) * (1! + 2! + 3! + ... + n!) for a given n. Call this function "going(n)" where n is an integer greater or equal to 1.

To avoid discussions about rounding, if the result of the calculation is designed by "result", going(n) will return "result" truncated to 6 decimal places.

#Examples: 1.0000989217538616 will be truncated to 1.000098

1.2125000000000001 will be truncated to 1.2125

#Remark: Keep in mind that factorials grow rather rapidly, and you can need to handle large inputs.
 */

// NOTE: Javascript cannot handle factorials >> 150; Returns Infinity

function going(n) {
  // your code
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }

  function sumFactorialTo(n) {
    if (n <= 1) return 1;
    return factorial(n) + sumFactorialTo(n - 1);
  }

  let result = (1 / factorial(n) * sumFactorialTo(n)).toString();
  return Number(result.slice(0, result.indexOf('.') + 7));
}

// TESTS

Test.describe('Basic tests', function() {
  Test.assertEquals(going(5), 1.275);
  Test.assertEquals(going(6), 1.2125);
  Test.assertEquals(going(7), 1.173214);
});
