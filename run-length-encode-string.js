// Expected output: 2a2b3c1z
function encodeRuns(value) {
  let count = 1;
  let result = '';
  for (let i = 1; i <= value.length; i++) {
    if (value[i] === value[i - 1]) count++;
    else {
      result += `${count}${value[i - 1]}`;
      count = 1;
    }
  }
  return result;
}

console.log(encodeRuns('aabbcccz'));
