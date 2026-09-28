// Expected output:
// Seen: { '1': true, '2': true, '3': true, '4': true }
// Result: [ 2, 1 ]

const arr = [1, 2, 3, 2, 1, 4];
const seen = {};
const result = [];

for (const item of arr) {
  if (seen[item]) {
    result.push(item);
  } else {
    seen[item] = true;
  }
}

console.log('Seen:', seen);
console.log('Result:', result);
