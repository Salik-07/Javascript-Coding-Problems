// Expected output: ReferenceError: x is not defined
try {
  console.log('x', x);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
