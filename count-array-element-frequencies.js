// Expected output:
// Result: { '1': 1, '2': 2, '3': 3 }

const arr = [1, 2, 2, 3, 3, 3];
const frequency = {};

arr.forEach((elem) => {
  if (!frequency[elem]) {
    frequency[elem] = 1;
  } else {
    frequency[elem] = frequency[elem] + 1;
  }
});

console.log('Result:', frequency);
