/**
 * @author Alexi Jamal
 *
 * @description
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

console.time("Execution time");
let arr1 = [];
let arr2 = [];
let max = 1;

for (let i = 100; i <= 1000; i++) {
  arr1.push(i);
  arr2.push(i);
}

arr1.forEach(i => {
  arr2.forEach(j => {
    if (checkPalindrome(i * j)) {
      max = i * j;
    }
  });
});

function checkPalindrome(num) {
  let rem,
    temp,
    final = 0;

  temp = num;
  while (num > 0) {
    rem = num % 10;
    num = parseInt(num / 10);
    final = final * 10 + rem;
  }
  if (final == temp) return true;
  else return false;
}

console.log(max);
console.timeEnd("Execution time");
