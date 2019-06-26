/**
 * @author Alexi Jamal
 *
 * @description
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 */

let arr = [...Array(1000).keys()];
let sum = 0;

arr.forEach(number => {
  if (number % 3 == 0 || number % 5 == 0) sum += number;
});

console.log(sum);
//Execution time:
