// Expected output: [5,6,7,1,2,3,4]
function rotate(nums, k) {
  const original = [...nums];
  for (let i = 0; i < nums.length; i++) nums[(i + k) % nums.length] = original[i];
}

const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(JSON.stringify(nums));
