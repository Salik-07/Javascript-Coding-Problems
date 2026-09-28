// Expected output:
// Result: [ [ 'a', 1 ], [ 'b', 2 ] ]
// Result: [ [ 'a', 1 ], [ 'b', 2 ] ]

const obj = { a: 1, b: 2 };
const result = [];

for (const key in obj) {
  result.push([key, obj[key]]);
}

console.log('Result:', Object.entries(obj));
console.log('Result:', result);
