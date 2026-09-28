// Expected output: [ 24, 12, 8, 6 ]
// Formula: result[idx] = multiply all on left * multiply all on right
function sumOfProductsExceptSelf(nums) {
  const n = nums.length;
  const result = [];

  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
      leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
      rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
      result.push(leftProducts[i] * rightProducts[i]);
  }

  return result;
}

const nums = [1, 2, 3, 4];
console.log(sumOfProductsExceptSelf(nums));
