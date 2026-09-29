let arr = [5, 2, 8, 1, 9];
arr.sort(); // Sorts the array in ascending order
console.log(arr); // Outputs: [1, 2, 5, 8, 9]

arr.sort((a, b) => b - a); // Sorts the array in descending order
console.log(arr); // Outputs: [9, 8, 5, 2, 1]

let names = ["John", "Alice", "Bob", "Charlie"];
names.sort(); // Sorts the array of strings in alphabetical order
console.log(names); // Outputs: ["Alice", "Bob", "Charlie", "John"]

let numbers = [1,10, 5, 2, 20, 15];
numbers.sort((a, b) => a - b); // Sorts the array of numbers in ascending order
console.log(numbers); // Outputs: [5, 10, 15, 20]

let mixed = [3, "apple", 1, "banana", 2];
mixed.sort(); // Sorts the mixed array, but may not produce expected results due to type coercion
console.log(mixed); // Outputs: [1, 2, 3, "apple", "banana"]

