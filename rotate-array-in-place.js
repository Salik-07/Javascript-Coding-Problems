// Expected output:
// [
//   5, 6, 7, 1,
//   2, 3, 4
// ]

function rotate(nums, k) {
  // Step 1: Normalize k so that it doesn't exceed the length of the array
  k = k % nums.length;

  // Step 2: Reverse the entire array
  reverse(nums, 0, nums.length - 1);

  // Step 3: Reverse the first k elements
  reverse(nums, 0, k - 1);

  // Step 4: Reverse the rest of the array
  reverse(nums, k, nums.length - 1);
}

// Helper function to reverse elements in the array from index start to end
function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums);
