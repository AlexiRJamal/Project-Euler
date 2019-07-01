/**
 * @author Alexi Jamal
 *
 * @description
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

let sum = 0;
for (let i = 2; i < 2000000; i++) {
  if (checkPrime(i) == true) {
    sum += i;
  }
}

function checkPrime(num) {
  //! REMOVED BECAUSE IT IS SLOW
  // for (let i = 2; i < num; i++) {
  //   if (num % i === 0) return false;
  // }
  // return num > 1;
  let root = Math.sqrt(num);
  for (let i = 2; i <= root; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

console.log(sum);
