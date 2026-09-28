// Expected output for "madam":
// Result: true
// Other palindrome examples: "lol", "abba".
// Non-palindrome examples: "salik", "saliks".

const string = 'madam';
const length = string.length;
let isPalindrome = true;

for (let i = 0; i < length / 2; i++) {
  if (string[i] !== string[length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log('Result:', isPalindrome);
