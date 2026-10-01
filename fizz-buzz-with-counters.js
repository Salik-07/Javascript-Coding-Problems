// Expected output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz

let fizzCounter = 0;
let buzzCounter = 0;

for (let number = 1; number <= 30; number++) {
  fizzCounter++;
  buzzCounter++;

  let output = '';

  if (fizzCounter === 3) {
    output += 'Fizz';
    fizzCounter = 0;
  }

  if (buzzCounter === 5) {
    output += 'Buzz';
    buzzCounter = 0;
  }

  console.log(output || number);
}
