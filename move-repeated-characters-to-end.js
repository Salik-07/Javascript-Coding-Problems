// Expected output: lephant
function removeOccurences(input) {
  const characters = [];
  for (const character of input) {
    const index = characters.indexOf(character);
    if (index >= 0) characters.splice(index, 1);
    characters.push(character);
  }
  return characters.join('');
}

console.log(removeOccurences('elephant'));
