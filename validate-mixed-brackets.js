// Expected output, one line per input: true, true, false, false, true
function isValidParenthesis(str) {
  const stack = [];
  const matchingPairs = { ')': '(', ']': '[', '}': '{' };
  for (const char of str) {
    if ('([{'.includes(char)) stack.push(char);
    else if (char in matchingPairs && stack.pop() !== matchingPairs[char]) return false;
  }
  return stack.length === 0;
}

for (const input of ['()', '()[]{}', '(]', '([)]', '{[]}']) {
  console.log(isValidParenthesis(input));
}
