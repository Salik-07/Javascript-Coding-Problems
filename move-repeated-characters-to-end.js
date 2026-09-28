// Expected output:
// lephant

function removeOccurences(input) {
  const elem = [];

  for (let i = 0; i < input.length; i++) {
    if (!elem.includes(input[i])) {
      elem.push(input[i]);
    } else {
      const ind = elem.findIndex((e) => e === input[i]);

      elem.splice(ind, 1);
      elem.push(input[i]);
    }
  }

  return elem.join('');
}

console.log(removeOccurences('elephant'));
