// Expected output: 1-3|5-6|8-10
// This is the repeated range-formatting prompt (problem 15) in the source text.
const numbers = [1, 2, 3, 5, 6, 8, 9, 10];
const groups = [];
for (const number of numbers) {
  const previous = groups[groups.length - 1];
  if (previous && previous[previous.length - 1] + 1 === number) previous.push(number);
  else groups.push([number]);
}
console.log(groups.map((group) => `${group[0]}-${group[group.length - 1]}`).join('|'));
