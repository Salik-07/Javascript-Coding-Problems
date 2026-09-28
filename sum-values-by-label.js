// Expected output: [["third",142],["second",149],["first",41]]
const example = [
  ['third', 22], ['first', 12], ['second', 19], ['first', 17],
  ['first', 12], ['second', 130], ['third', 120],
];

const totals = new Map();
const lastIndex = new Map();
example.forEach(([label, value], index) => {
  totals.set(label, (totals.get(label) || 0) + value);
  lastIndex.set(label, index);
});

const result = [...totals].sort(([a], [b]) => lastIndex.get(b) - lastIndex.get(a));
console.log(JSON.stringify(result));
