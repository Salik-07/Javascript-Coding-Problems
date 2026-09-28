// Expected output: It's not a palindrome
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      console.log("It's not a palindrome");
      return;
    }
  }
  console.log("It's a palindrome");
}

isPalindrome('salik');
