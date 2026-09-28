// Expected output: [ 101, 5, 550 ]
// The target itself is excluded; ties prefer the smaller value.
function findKClosest(arr, x, k) {
  return arr.filter((value) => value !== x)
    .sort((a, b) => Math.abs(a - x) - Math.abs(b - x) || a - b)
    .slice(0, k);
}

console.log(findKClosest([5, 100, 101, 550, 1000], 100, 3));
