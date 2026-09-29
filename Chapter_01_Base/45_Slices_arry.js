let arr = [5, 2, 8, 1, 9];
let slicedArr = arr.slice(1, 4); // Extracts elements from index 1 to 3
console.log(slicedArr); // Outputs: [2, 8, 1]

let names = ["John", "Alice", "Bob", "Charlie"];
let slicedNames = names.slice(0, 2);
console.log(slicedNames); // Outputs: ["John", "Alice"]

let numbers = [1, 10, 5, 2, 20, 15];
let slicedNumbers = numbers.slice(2);
console.log(slicedNumbers); // Outputs: [5, 2, 20, 15]

let mixed = [3, "apple", 1, "banana", 2];
let slicedMixed = mixed.slice(1, 4);
console.log(slicedMixed); // Outputs: ["apple", 1, "banana"]   

// Note: The slice() method does not modify the original array; it returns a new array containing the selected elements.

// the slipce() method can also be used to create a shallow copy of an array by omitting the start and end parameters:
let originalArray = [1, 2, 3, 4, 5];
let copiedArray = originalArray.slice();
console.log(copiedArray); // Outputs: [1, 2, 3, 4, 5]
    