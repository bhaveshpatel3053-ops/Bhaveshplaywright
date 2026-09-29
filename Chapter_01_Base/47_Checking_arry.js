let arr = new Array(1, 2, 3); // Checks if arr is an array
console.log(Array.isArray(arr)); // Outputs: true
console.log(arr.includes(3)); // Outputs: true
console.log(arr.includes(6)); // Outputs: false


//every() method checks if all elements in the array pass a test (provided as a function)
[80, 90, 100].every((value) => value >= 80); // Checks if all elements are greater than or equal to 80
console.log([80, 90, 100].every((value) => value >= 80)); // Outputs: true

//Playwright API snippet to check if all elements in the array are even
[200,201,203,205].every( $ => $ < 300); // Checks if all elements are less than 300
console.log([200,201,203,205].every($ => $ < 300)); // Outputs: true
