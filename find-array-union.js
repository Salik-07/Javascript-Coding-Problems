// Expected output:
// Union: [1,2,3,4,5,6,7]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const combined = arr1.concat(arr2);
const union = [];

for (let i = 0; i < combined.length; i++) {
  if (!union.includes(combined[i])) {
    union.push(combined[i]);
  }
}

console.log("Union:", JSON.stringify(union));
