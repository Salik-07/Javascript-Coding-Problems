// Expected output: c
// Each release time is measured from the start; ties choose the later key.
function slowestKey(keys, releaseTimes) {
  let slowest = keys[0];
  let longest = releaseTimes[0];
  for (let i = 1; i < keys.length; i++) {
    const duration = releaseTimes[i] - releaseTimes[i - 1];
    if (duration >= longest) {
      longest = duration;
      slowest = keys[i];
    }
  }
  return slowest;
}

console.log(slowestKey(['a', 'b', 'c'], [2, 5, 9]));
