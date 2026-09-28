// Expected output:
// 10

const secondLargest = (nums) => {
  let largest = nums[0];
  let sLargest = -Infinity;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      sLargest = largest;
      largest = nums[i];
    } else if (nums[i] < largest && nums[i] > sLargest) {
      sLargest = nums[i];
    }
  }

  return sLargest;
};

console.log(secondLargest([10, 5, 12]));
