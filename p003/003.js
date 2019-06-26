/**
 * @author Alexi Jamal
 *
 * @description
 *
 */

let num = 600851475143;
let divisor = 2;

while (num > divisor) {
  if (num % divisor == 0) {
    num /= divisor;
    divisor = 2;
  } else divisor++;
}

console.log("The lpf is: " + divisor);
