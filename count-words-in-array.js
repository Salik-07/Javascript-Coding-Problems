// Expected output:
// { hello: 2, world: 1, java: 2 }

const arrr = ['hello', 'world', 'java', 'hello', 'java'];

function countWord(p) {
  var count = {};

  p.forEach((item) => {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  });

  return count;
}

console.log(countWord(arrr));
