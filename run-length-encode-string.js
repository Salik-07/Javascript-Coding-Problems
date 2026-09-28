// Expected output:
// 2a2b3c1z

function x(val) {
  let count = 0;
  let lastOccurence = '';
  let result = '';

  for (let i = 0; i <= val.length; i++) {
    if (!lastOccurence || lastOccurence === val[i]) {
      count = count + 1;
      lastOccurence = val[i];
    } else {
      result = result + (count + lastOccurence);
      count = 1;
      lastOccurence = val[i];
    }
  }
  return result;
}

console.log(x('aabbcccz'));
