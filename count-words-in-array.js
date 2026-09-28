// Expected output: { hello: 2, world: 1, java: 2 }
function countWord(words) {
  const count = {};
  words.forEach((word) => { count[word] = (count[word] || 0) + 1; });
  return count;
}

console.log(countWord(['hello', 'world', 'java', 'hello', 'java']));
