// Expected output:
// First subarray: [ 1, 2, 3, 4 ]
// Second subarray: [ 3, 2, 5 ]

function splitArrayIntoTwoSubarrays(nums) {
  const totalSum = nums.reduce((acc, curr) => acc + curr, 0);

  // If the total sum is odd, we can't split it into two equal sum subarrays
  if (totalSum % 2 !== 0) {
    return null; // It's not possible to split
  }

  const targetSum = totalSum / 2;
  let runningSum = 0;

  // Iterate over the array to check if we can split at some point
  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i];

    // If the running sum equals half of the total sum, we can split the array
    if (runningSum === targetSum) {
      const firstSubarray = nums.slice(0, i + 1);
      const secondSubarray = nums.slice(i + 1);
      return [firstSubarray, secondSubarray];
    }
  }

  return null; // No valid split found
}

// Example usage:
const nums = [1, 2, 3, 4, 3, 2, 5];
// const nums = [2, 1, 3];
// const nums = [1, -1];
const result = splitArrayIntoTwoSubarrays(nums);
if (result) {
  console.log('First subarray:', result[0]);
  console.log('Second subarray:', result[1]);
} else {
  console.log('Cannot split into two equal sum subarrays.');
}
