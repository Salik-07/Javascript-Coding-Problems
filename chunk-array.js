// Expected output:
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

const arr = [1, 2, 3, 4, 5];
const size = 2;
const chunks = [];

for (let i = 0; i < arr.length; i = i + size) {
  chunks.push(arr.slice(i, size + i));
}

console.log(chunks);
