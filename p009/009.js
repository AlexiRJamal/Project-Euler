/**
 * @author Alexi Jamal
 *
 * @description
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a2 + b2 = c2
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

const PERMIMETER = 1000;
for (let a = 1; a < PERMIMETER; a++) {
  for (let b = a + 1; b < PERMIMETER; b++) {
    let c = Math.sqrt(pythagorean(a, b));
    if (checkPythagorean(a, b, c) == true) {
      if (a + b + c == 1000) {
        console.log("a is", a);
        console.log("b is", b);
        console.log("c is", c);
      }
    }
  }
}

function pythagorean(num1, num2) {
  return Math.pow(num1, 2) + Math.pow(num2, 2);
}

function checkPythagorean(a, b, c) {
  return pythagorean(a, b) == Math.pow(c, 2);
}
