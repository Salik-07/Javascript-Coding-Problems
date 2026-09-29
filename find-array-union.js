// Expected output:
// Union: [1,2,3,4,5,6,7]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

function unionArrays(first, second) {
  const union = [];

  function addIfMissing(value) {
    for (let i = 0; i < union.length; i++) {
      if (union[i] === value) return;
    }
    union.push(value);
  }

  for (let i = 0; i < first.length; i++) {
    addIfMissing(first[i]);
  }

  for (let i = 0; i < second.length; i++) {
    addIfMissing(second[i]);
  }

  return union;
}

console.log('Union:', JSON.stringify(unionArrays(arr1, arr2)));
