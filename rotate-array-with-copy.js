// Expected output:
// [
//   5, 6, 7, 1,
//   2, 3, 4
// ]

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);
console.log(nums);

function rotate(nums, k) {
  const length = nums.length;
  const rotateNumbers = [...nums];

  for (let i = 0; i < length; i++) {
    const idx = i + k;
    nums[idx % length] = rotateNumbers[i];
  }
}
