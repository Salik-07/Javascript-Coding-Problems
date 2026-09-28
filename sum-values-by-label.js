// Expected output:
// [ [ 'third', 142 ], [ 'first', 41 ], [ 'second', 149 ] ]
// The source code's order differs from the target order written in the prompt.

const example = [
  ['third', 22],
  ['first', 12],
  ['second', 19],
  ['first', 17],
  ['first', 12],
  ['second', 130],
  ['third', 120],
];

const unique = [];
const chk = [];

for (let x = 0; x < example.length; x++) {
  const idx = unique.indexOf(example[x][0]);

  if (idx < 0) {
    unique.push(example[x][0]);
    chk.push([example[x][0], example[x][1]]);
  } else {
    chk[idx] = [ chk[idx][0], chk[idx][1] + example[x][1]]
  }
}

console.log(chk)
