// Expected output: 1-3|5-6|8-10
function compressRanges(arr) {
  if (arr.length === 0) return '';
  const ranges = [];
  let start = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (i === arr.length || arr[i] !== arr[i - 1] + 1) {
      ranges.push(`${start}-${arr[i - 1]}`);
      start = arr[i];
    }
  }
  return ranges.join('|');
}

console.log(compressRanges([1, 2, 3, 5, 6, 8, 9, 10]));
