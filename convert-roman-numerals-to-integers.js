// Expected output:
// 3
// 4
// 9
// 58
// 1994

function romanToInt(s) {
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let currentVal = romanToIntMap[s[i]];
        let nextVal = romanToIntMap[s[i + 1]];

        // If the next value is larger, it means we have to subtract the current value
        if (nextVal && currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }
    return total;
}

// Example usage:
console.log(romanToInt('III'));    // Output: 3
console.log(romanToInt('IV'));     // Output: 4
console.log(romanToInt('IX'));     // Output: 9
console.log(romanToInt('LVIII'));  // Output: 58
console.log(romanToInt('MCMXCIV'));// Output: 1994
