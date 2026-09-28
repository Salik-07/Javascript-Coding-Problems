// Expected output: [ '5 -- 0', '3 -- 1', '2 -- 3', '4 -- 5' ]
function findValues(n, arr) {
  const result = [];
  const seen = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n || seen.includes(arr[i])) result.push(`${arr[i]} -- ${i}`);
    else seen.push(arr[i]);
  }
  return result;
}

console.log(findValues(2, [5, 3, 2, 2, 1, 4]));
