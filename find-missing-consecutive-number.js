// Expected output: The missing element is: 4
function findMissingElement(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

const array = [1, 2, 3, 5];
const missingElement = findMissingElement(array);
console.log("The missing element is:", missingElement);
