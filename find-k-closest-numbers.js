// Expected output:
// [ 101, 5, 550 ]

function findCrossOver(arr, low, high, x) {
  // Base cases
  if (arr[high] <= x)  // x is greater than all
      return high;
  if (arr[low] > x)  // x is smaller than all
      return low;

  // Find the middle point
  var mid = Math.floor((low + high) / 2);

  // If x is same as middle element, then return mid
  if (arr[mid] <= x && arr[mid + 1] > x)
      return mid;

  // If x is greater than arr[mid], then
  // either arr[mid + 1] is ceiling of x
  // or ceiling lies in arr[mid+1...high]
  if (arr[mid] < x)
      return findCrossOver(arr, mid + 1, high, x);

  return findCrossOver(arr, low, mid - 1, x);
}

// This function returns k closest elements to x
// in arr[]. n is the number of elements in arr[]
function findKClosest(arr, x, k, n) {
  // Find the crossover point
  var l = findCrossOver(arr, 0, n - 1, x);
  var r = l + 1; // Right index to search
  var count = 0; // To keep track of count of elements already found
  var result = []; // Array to store the result

  // If x is present in arr[], then reduce left index.
  // Assumption: all elements in arr[] are distinct
  if (arr[l] == x)
      l -= 1;

  // Compare elements on left and right of crossover
  // point to find the k closest elements
  while (l >= 0 && r < n && count < k) {
      if (x - arr[l] <= arr[r] - x) {
          result.push(arr[l]);
          l -= 1;
      } else {
          result.push(arr[r]);
          r += 1;
      }
      count += 1;
  }

  // If there are no more elements on right side, then add left elements
  while (count < k && l >= 0) {
      result.push(arr[l]);
      l -= 1;
      count += 1;
  }

  // If there are no more elements on left side, then add right elements
  while (count < k && r < n) {
      result.push(arr[r]);
      r += 1;
      count += 1;
  }

  return result;
}

// Driver Code
var arr = [5,100,101,550,1000];
var n = arr.length;
var x = 100;
var k = 3;

var closestElements = findKClosest(arr, x, k, n);
console.log(closestElements);
