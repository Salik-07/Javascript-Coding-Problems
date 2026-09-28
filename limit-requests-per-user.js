// Expected output:
// Before: {}
// false
// false
// false
// false
// false
// After: { salik: 3, john: 2 }
let requestCounts = {};
const limit = 100;
const windowSizeInMinutes = 1;

// unref lets this standalone example exit after printing its sample results.
setInterval(() => { requestCounts = {}; }, windowSizeInMinutes * 60 * 1000).unref();

function isRateLimited(user) {
  if (!requestCounts[user]) requestCounts[user] = 0;
  if (requestCounts[user] >= limit) return true;
  requestCounts[user]++;
  return false;
}

console.log('Before:', requestCounts);
console.log(isRateLimited('salik'));
console.log(isRateLimited('salik'));
console.log(isRateLimited('john'));
console.log(isRateLimited('salik'));
console.log(isRateLimited('john'));
console.log('After:', requestCounts);
