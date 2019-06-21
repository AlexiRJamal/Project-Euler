let a = 0,
  b = 1,
  result;

result = b;
let counter = 1;

for (let i = 1; i <= 50; i++) {
  console.log(`${counter}. ${result}`);
  result = a + b;
  a = b;
  b = result;
  counter++;
}
