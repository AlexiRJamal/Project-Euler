let counter = 0;
let prime = 0;
let num = 2;

while (counter < 10001) {
  debugger;
  if (checkPrime(num) == true) {
    counter++;
    prime = num;
    num++;
  } else num++;
}

console.log(prime);

function checkPrime(num) {
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
