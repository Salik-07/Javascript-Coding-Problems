// Expected output:
// 1 { a: 1 }

let x = {};
x.a = x = { a: 1 };
console.log(x.a, x);
