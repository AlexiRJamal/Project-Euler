/**
 * @author Alexi Jamal
 *
 * @description
 * The sum of the squares of the first ten natural numbers is,
 *
 * 12 + 22 + ... + 102 = 385
 * The square of the sum of the first ten natural numbers is,
 *
 * (1 + 2 + ... + 10)2 = 552 = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 *
 * $MATH:
 * Computers are fast, so we can implement this solution directly without any clever math.
 * However for the mathematically inclined, there are closed-form formulas:
 * s  = N(N + 1) / 2.
 * s2 = N(N + 1)(2N + 1) / 6.
 * Hence s^2 - s2 = (N^4 / 4) + (N^3 / 6) - (N^2 / 4) - (N / 6).
 */

let sumOfSquares = 0;
let sumSquared = 0;
let difference = 0;

for (let i = 1; i <= 100; i++) {
  let temp = i;
  temp *= temp;
  sumOfSquares += temp;
}

for (let i = 1; i <= 100; i++) {
  sumSquared += i;
}

sumSquared *= sumSquared;
difference = sumSquared - sumOfSquares;

console.log(`Sum of squares is: ${sumOfSquares}`);
console.log(`Square sum of numbers is: ${sumSquared}`);
console.log(`The difference is: ${sumSquared}-${sumOfSquares}=${difference}`);
