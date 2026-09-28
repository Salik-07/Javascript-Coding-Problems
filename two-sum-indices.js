// Expected output: [ 0, 1 ]
function twoSums(arr, target) {
  const numMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const difference = target - arr[i];
    if (numMap.has(difference)) return [numMap.get(difference), i];
    numMap.set(arr[i], i);
  }
  return [];
}

console.log(twoSums([2, 7, 11, 15], 9));
