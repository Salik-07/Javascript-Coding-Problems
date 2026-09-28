// Expected output:
// true
// false
// false
// true
// true

function isBalancedParentheses(input) {
    // Stack to keep track of opening parentheses
    let stack = [];

    // Loop through each character in the input string
    for (let char of input) {
        // If the character is an opening parenthesis, push it to the stack
        if (char === '(') {
            stack.push(char);
        }
        // If the character is a closing parenthesis
        else if (char === ')') {
            // If the stack is empty, it means there's no matching opening parenthesis
            if (stack.length === 0) {
                return false;
            }
            // Pop the top of the stack (which should be an opening parenthesis)
            stack.pop();
        }
    }

    // If the stack is empty, all opening parentheses have matching closing parentheses
    return stack.length === 0;
}

// Test cases
console.log(isBalancedParentheses("(())"));    // Output: true
console.log(isBalancedParentheses("((())"));   // Output: false
console.log(isBalancedParentheses("(()))"));   // Output: false
console.log(isBalancedParentheses("()()()"));  // Output: true
console.log(isBalancedParentheses(""));        // Output: true
