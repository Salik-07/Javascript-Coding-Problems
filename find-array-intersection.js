// Expected output:
// Intersection: [ 3, 4, 5 ]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const intersection = arr1.filter((elem) => arr2.includes(elem));

console.log('Intersection:', intersection);
