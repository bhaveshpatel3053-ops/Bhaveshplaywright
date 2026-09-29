let browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];
console.log(browsers[0]);

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[0]);

let status = ["Active", "Inactive", "Pending"];
console.log(status[0]);
console.log(status[1]);
console.log(status[2]);

console.log(status.at(-1)); // This line has a typo and will cause an error. It should be console.log(status[-1]); but negative indexing is not supported in JavaScript arrays.