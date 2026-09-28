// Expected output:
// *****
// *   *
// *abc*
// *def*
// *   *
// *****

function createFramedStrings(strings) {
  const maxLength = Math.max(...strings.map(str => str.length));
  const border = '*'.repeat(maxLength + 2);
  const paddingLine = `*${' '.repeat(maxLength)}*`;

  const framedStrings = [border, paddingLine];
  for (let str of strings) {
      framedStrings.push(`*${str}*`);
  }
  framedStrings.push(paddingLine, border);

  return framedStrings;
}

const inputStrings = ["abc", "def"];
const output = createFramedStrings(inputStrings);
output.forEach(line => console.log(line));
