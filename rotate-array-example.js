// Expected output: [5,6,7,1,2,3,4]
// Completes the rotation call shown in problem 30 of the source text.
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

function rotate(arr, positions) {
  const shift = positions % arr.length;
  arr.unshift(...arr.splice(-shift));
}

rotate(nums, k);
console.log(JSON.stringify(nums));
