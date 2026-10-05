function getData(a, b) {}
console.log(getData.length);
// Output: 2
// A function's length is the number of parameters declared in it, so getData has 2.

function getData1(a, b, ...rest) {}
console.log(getData1.length);
// Output: 2
// The rest parameter is not counted in the function's length.

function getData2(a, b, c, d = 4, e) {}
console.log(getData2.length);
// Output: 3
// function.length counts parameters only until the first default parameter.
// Since d = 4 appears before e, the count stops at 3, and the default parameter itself is not counted.
// So only a, b, and c are counted, making the length 3.

// X------X--------X--------X

const arr = [
  { name: "X", age: 1 },
  { name: "D", age: 13 },
  { name: "U", age: 2 },
  { name: "A", age: 9 },
];

arr.sort(function (a, b) {
  if (a.age < b.age) {
    // If a is younger than b, put a before b in ascending order.
    // Note: for descending order, change this to return 1 so older value comes first.
    return -1;
  }
  if (a.age > b.age) {
    // If a is older than b, put a after b in ascending order.
    // Note: for descending order, change this to return -1 so older value comes first.
    return 1;
  }
  // If both ages are equal, keep their original order.
  // Note: this remains the same for both ascending and descending order.
  return 0;
});

console.log(arr);

// X------X--------X--------X

console.log(JSON.stringify("JS") === "JS");
//Output: false

// X------X--------X--------X

const numbers = [1, 2, 3];
numbers[5] = 6;
console.log(numbers);
// Output: [1, 2, 3, <2 empty items>, 6]
// The array now has a length of 6, with two empty slots at indices 3 and 4.

// X------X--------X--------X

const x = [];
x[4] = 1;
x.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});
// Output: Index: 4, Value: 1
// The forEach method only iterates over defined elements in the array, so it skips indices 0 to 3 which are empty.

// X------X--------X--------X

const person = { name: "Salik" };
const keyArray = ["name"];
person[keyArray] = "Muhammad Salik";
console.log(person);
// Output: { 'name': 'Muhammad Salik' }
// In JavaScript, object keys are effectively strings or symbols.
// When an array is used as an object key, JavaScript converts it to a primitive using toString().
// For ["name"], toString() returns "name", so the property key becomes "name".
// That is why the existing key "name" gets overwritten.

// X------X--------X--------X

const arr1 = [1, 2, 3];
const str = "1,2,3";
console.log(arr1 == str);
// Output: true
// When comparing an array to a string using the loose equality operator (==), JavaScript converts the array to a primitive.
// For arrays, the conversion uses toString(), so [1, 2, 3] becomes "1,2,3".
// Then the comparison becomes "1,2,3" == "1,2,3", which is true.

// X------X--------X--------X

console.log([] == ![]);
// Output: true
// The expression ![] evaluates to false because an empty array is a truthy value.
// So the comparison becomes [] == false.
// When comparing an array to a boolean using the loose equality operator (==), JavaScript converts the array to a primitive.
// For arrays, the conversion uses toString(), so [] becomes "".
// Then the comparison becomes "" == false.
// When comparing a string to a boolean, JavaScript converts the boolean to a number.
// false is converted to 0.
// So the comparison becomes "" == 0.
// An empty string is converted to 0 when compared to a number.
// Therefore, the comparison returns true.

// X------X--------X--------X
let counterObject = {
  count: 1,
  toString: function () {
    return counterObject.count++;
  },
};

if (counterObject == 1 && counterObject == 2 && counterObject == 3) {
  console.log("Hello");
}

// Explanation:
// In JavaScript, when an object is compared with a primitive using the loose equality operator (==),
// the object is converted to a primitive first. Here, the object has a custom toString() method.
// Each time the object is compared with a number, JavaScript calls toString(), which returns the current
// count and increments it afterward.
// So the sequence works like this:
// 1) counterObject == 1  -> toString() returns 1 and sets count to 2
// 2) counterObject == 2  -> toString() returns 2 and sets count to 3
// 3) counterObject == 3  -> toString() returns 3 and sets count to 4
// All three comparisons become true, so "Hello" is logged.

// X------X--------X--------X

const rejectedPromise = new Promise((_, reject) => {
  reject("Something went wrong");
});

const chainResult = rejectedPromise
  .then(() => {
    console.log("then");
  })
  .catch((error) => {
    console.log("catch");
    return error;
  })
  .then((result) => {
    console.log("then after catch", result);
  });

// Explanation:
// The Promise rejects immediately, so the first .then() is skipped.
// The .catch() runs and logs "catch"
// A .catch() always returns a new Promise. If it returns a value, that value goes to the next .then()
// Here it returns the error value, so the second .then() gets it as `result`.
// Output order:
// catch
// then after catch Something went wrong

// X------X--------X--------X

let arrayValue = [9, 8, 7, 6][(1, 2, 3)];
// The comma operator evaluates each expression left to right and returns only the last one.
// So (1, 2, 3) becomes 3, and [9, 8, 7, 6][3] gives 6.
console.log(arrayValue);
// Output: 6

// X------X--------X--------X

function addNumbers(firstValue, secondValue) {
  "use strict";
  firstValue = 10;
  secondValue = 20;
  return arguments[0] + arguments[1];
}

// In strict mode, changing the parameters does not change the original arguments object.
// So arguments[0] and arguments[1] still hold 3 and 5, and the result is 8.
console.log(addNumbers(3, 5));
// Output: 8

// X------X--------X--------X

const numberLikeObject = { valueOf: () => 2 };

// JavaScript converts the object to a primitive using valueOf() before doing math or comparison.
// So a + 3 becomes 2 + 3, a == 2 is true, and a > 1 is true.
console.log(numberLikeObject + 3);
console.log(numberLikeObject == 2);
console.log(numberLikeObject > 1);

// X------X--------X--------X

function testFunction() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

// If we return from try and also return from finally, the finally return takes priority.
// So this function returns 2, not 1.
const resultValue = testFunction();
console.log(resultValue);
// Output: 2

// X------X--------X--------X

// splice(start, deleteCount) removes elements from the array.
// Here, remove all elements from index 0 to the end.
const numbersList = [1, 2, 3];
numbersList.splice(0, numbersList.length);
console.log(numbersList);
// Output: []

// X------X--------X--------X

// const MESSAGE = 108;

// function logMessage() {
//   console.log(MESSAGE);
//   const MESSAGE = 109;
//   // var MESSAGE = 110; // If we use var instead of const, it will log undefined because var is hoisted and initialized to undefined.
// }

// logMessage(); // ReferenceError: Cannot access 'MESSAGE' before initialization
// // Explanation:
// // In JavaScript, variables declared with const and let are hoisted but not initialized.
// // This means they are in a "temporal dead zone" from the start of the block until the declaration is encountered.
// // So when logMessage() tries to access MESSAGE before its declaration, it throws a ReferenceError.

// X------X--------X--------X

// function greatGrandParent() {
//   console.log("greatGrandParent");
//   grandParent();
// }

// function grandParent() {
//   console.log("grandParent");
//   parent();
// }

// function parent() {
//   console.log("parent");
//   child();
// }

// function child() {
//   console.log("child");
//   innerChild();
// }

// function innerChild() {
//   console.trace();
// }

// // The call stack shows the sequence of functions being executed.
// // Each function calls the next one, so the trace prints the full chain from innerChild -> child -> parent -> grandParent -> greatGrandParent.
// greatGrandParent();

// X------X--------X--------X

// function checkRequiredParameter() {
//   throw new Error("Param required");
// }

// function showName(name = checkRequiredParameter()) {
//   console.log(name);
// }

// // Default parameters are evaluated when no argument is passed.
// // If the default value is a function call that throws, the error is thrown immediately.
// // So the first call fails, and the second call prints "Salik".
// showName(); // Output: throws Error: Param required

// showName("Salik"); // Output: Salik

// X------X--------X--------X

// Create a function add without using a function and arrow function
const a = 10;
const b = 20;

const add = new Function("a", "b", "console.log(a + b);");

add(a, b);

// X------X--------X--------X

function getSum() {
  return 2 + 2;
}

function getSquare() {
  return 4 * 4;
}

let finalResult = (getSum(), getSquare());
// Comma operator evaluates left to right and returns only the last value.
console.log(finalResult); // Output: 16
