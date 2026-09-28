// Expected output:
// 1-3|5-6|8-10|
// The source code adds a trailing separator, although the prompt omits it.

const modifiedArray = (arr) => {
  let result = '';
  let elem = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === 1 && arr.length - 1 !== i) {
      elem.push(arr[i - 1]);
    } else {
      result =
        arr.length - 1 == i
          ? result + `${elem[0]}-${arr[i]}|`
          : result + `${elem[0]}-${arr[i - 1]}|`;
      elem = [];
    }
  }

  return result;
};

console.log(modifiedArray([1, 2, 3, 5, 6, 8, 9, 10]));
