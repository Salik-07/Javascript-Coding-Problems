// Expected output:
// [ 2, 3, 4, 12, 14 ]

// Bubble Sort
function bubble(arr) {
  let isSwap = false;

  for (let i = arr.length; i > 0; i--) {
    isSwap = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        isSwap = false;
      }
    }

    if (isSwap) break;
  }

  return arr;
}

console.log(bubble([2, 3, 4, 14, 12]));
