// Expected output:
// First subarray: [ 1, 2, 3, 4 ]
// Second subarray: [ 3, 2, 5 ]
function splitArrayIntoTwoSubarrays(nums) {
  const total = nums.reduce((sum, value) => sum + value, 0);
  if (total % 2 !== 0) return null;
  let running = 0;
  for (let i = 0; i < nums.length; i++) {
    running += nums[i];
    if (running === total / 2) return [nums.slice(0, i + 1), nums.slice(i + 1)];
  }
  return null;
}

const result = splitArrayIntoTwoSubarrays([1, 2, 3, 4, 3, 2, 5]);
if (result) {
  console.log('First subarray:', result[0]);
  console.log('Second subarray:', result[1]);
} else {
  console.log('Cannot split into two equal sum subarrays.');
}
