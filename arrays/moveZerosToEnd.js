function moveZerosToEnd(arr) {
  let pos = 0; // position to place next non-zero

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pos++] = arr[i];
    }
  }

  while (pos < arr.length) {
    arr[pos++] = 0;
  }

  return arr;
}


console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZerosToEnd([0, 0, 0, 0])); // [0, 0, 0, 0]
console.log(moveZerosToEnd([1, 2, 3])); // [1, 2, 3]
console.log(moveZerosToEnd([0, -1, 2, 0, -3, 4])); // [-1, 2, -3, 4, 0, 0]