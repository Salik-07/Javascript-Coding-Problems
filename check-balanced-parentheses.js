// Expected output, one line per input: true, false, false, true, true
function isBalancedParentheses(input) {
  const stack = [];
  for (const char of input) {
    if (char === '(') stack.push(char);
    else if (char === ')') {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

for (const input of ['(())', '((())', '(()))', '()()()', '']) {
  console.log(isBalancedParentheses(input));
}
