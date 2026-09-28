// Expected output: [5,6,7,1,2,3,4]
function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

function rotate(nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(JSON.stringify(nums));
