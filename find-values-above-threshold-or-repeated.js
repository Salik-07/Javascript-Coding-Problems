// Expected output:
// [ '5 -- 0', '3 -- 1', '2 -- 3', '4 -- 5' ]

function removeAllLessThanNumbers(n, arr) {
  const result = [];
  const a = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n || a.includes(arr[i])) {
      result.push(`${arr[i]} -- ${i}`);
    } else {
      a.push(arr[i]);
    }
  }

  return result;
}

console.log(removeAllLessThanNumbers(2, [5, 3, 2, 2, 1, 4]));
