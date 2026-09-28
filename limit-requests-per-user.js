// Expected output:
// Before: {}
// false
// false
// false
// false
// false
// After: { salik: 3, john: 2 }

let requestCounts = {};
const limit = 100; // 100 requests
const windowSizeInMinutes = 1; // per minute

setInterval(() => {
  requestCounts = {}; // Reset the counts every minute
}, windowSizeInMinutes * 60 * 1000);

function isRateLimited(user) {
  if (!requestCounts[user]) {
    requestCounts[user] = 0;
  }

  if (requestCounts[user] >= limit) {
    return true; // Rate limit exceeded
  }

  requestCounts[user]++;
  return false;
}

console.log("Before:", requestCounts);
console.log(isRateLimited("salik"));
console.log(isRateLimited("salik"));
console.log(isRateLimited("john"));
console.log(isRateLimited("salik"));
console.log(isRateLimited("john"));
console.log("After:", requestCounts);
