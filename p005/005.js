/**
 * @author Alexi Jamal
 *
 * @description
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

let lcd = 1;

for (let i = 1; i <= 20; i++) {
  lcd *= Math.floor(i, gcd(i, lcd));
}

function gcd(num1, num2) {
  while (num2) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

console.log(lcd);

// function range(start, stop, step){
//     if (typeof stop == "undefined") {
//       stop = start;
//       start = 0;
//     }

//     if (typeof step == "undefined") {
//       step = 1;
//     }

//     if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
//       return [];
//     }

//     let result = [];
//     for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
//       result.push(i);
//     }

//     return result;
// }
