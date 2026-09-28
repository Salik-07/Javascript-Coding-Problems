// Expected output: 1 something { name: 'salik' }
function testing(x, y, z) {
  x = 2;
  y = 'anything';
  z = { age: 2 };
}

const a = 1;
const b = 'something';
const z = { name: 'salik' };
testing(a, b, z);
console.log(a, b, z);
