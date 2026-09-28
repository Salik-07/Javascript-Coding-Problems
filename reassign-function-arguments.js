// Expected output:
// 1 something { name: 'salik' }

function testing(x, y, z) {
  x = 2;
  y = 'anything';
  z = { age: 2 };
}

var a = 1,
  b = 'something',
  z = { name: 'salik' };

testing(a, b, z);

console.log(a, b, z);
