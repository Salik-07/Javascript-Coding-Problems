// Expected output:
// true
// true
// false
// false
// true

function isValidParenthesis(str) {
  const strStack = [];
  const matchingPairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      strStack.push(str[i]);
    } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      if (strStack.length === 0) {
        return false;
      }

      if (strStack.pop() !== matchingPairs[str[i]]) {
        return false;
      }
    }
  }

  return strStack.length === 0 ? true : false;
}

console.log(isValidParenthesis('()'));
console.log(isValidParenthesis('()[]{}'));
console.log(isValidParenthesis('(]'));
console.log(isValidParenthesis('([)]'));
console.log(isValidParenthesis('{[]}'));
