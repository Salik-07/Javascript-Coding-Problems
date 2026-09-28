// Expected output: 10
function secondLargest(nums) {
  let largest = nums[0];
  let runnerUp = -Infinity;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      runnerUp = largest;
      largest = nums[i];
    } else if (nums[i] < largest && nums[i] > runnerUp) {
      runnerUp = nums[i];
    }
  }
  return runnerUp;
}

console.log(secondLargest([10, 5, 12]));
