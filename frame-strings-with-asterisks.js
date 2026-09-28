// Expected output:
// *****
// *   *
// *abc*
// *def*
// *   *
// *****
function createFramedStrings(strings) {
  const maxLength = Math.max(...strings.map((str) => str.length));
  const border = '*'.repeat(maxLength + 2);
  const paddingLine = `*${' '.repeat(maxLength)}*`;
  return [border, paddingLine, ...strings.map((str) => `*${str}*`), paddingLine, border];
}

createFramedStrings(['abc', 'def']).forEach((line) => console.log(line));
