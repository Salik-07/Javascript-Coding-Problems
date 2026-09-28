// Expected output, one line per input: 3, 4, 9, 58, 1994
function romanToInt(s) {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const current = values[s[i]];
    total += current < (values[s[i + 1]] || 0) ? -current : current;
  }
  return total;
}

for (const numeral of ['III', 'IV', 'IX', 'LVIII', 'MCMXCIV']) {
  console.log(romanToInt(numeral));
}
