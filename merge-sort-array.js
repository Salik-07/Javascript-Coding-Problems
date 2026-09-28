// Expected output:
// [
//    1,  9, 10, 24,
//   72, 73, 76
// ]

// Merge Sort
function merge(arr_1, arr_2) {
  const mergedArray = [];
  let leftPointer = 0;
  let rightPointer = 0;

  while (leftPointer < arr_1.length && rightPointer < arr_2.length) {
    if (arr_1[leftPointer] < arr_2[rightPointer]) {
      mergedArray.push(arr_1[leftPointer]);
      leftPointer++;
    } else {
      mergedArray.push(arr_2[rightPointer]);
      rightPointer++;
    }
  }

  while (leftPointer < arr_1.length) {
    mergedArray.push(arr_1[leftPointer]);
    leftPointer++;
  }

  while (rightPointer < arr_2.length) {
    mergedArray.push(arr_2[rightPointer]);
    rightPointer++;
  }

  return mergedArray;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
