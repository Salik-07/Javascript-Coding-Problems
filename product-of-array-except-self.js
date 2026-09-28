// Expected output: [ 24, 12, 8, 6 ]
function productExceptSelf(nums) {
  const n = nums.length;
  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);
  for (let i = 1; i < n; i++) leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  for (let i = n - 2; i >= 0; i--) rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  return nums.map((_, i) => leftProducts[i] * rightProducts[i]);
}

console.log(productExceptSelf([1, 2, 3, 4]));
