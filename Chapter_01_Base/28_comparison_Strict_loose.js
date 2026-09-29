//28_comparison_Strict_loose
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)

// Loose equality (==) performs type coercion, so it converts the string "5" to a number before comparing.
// Strict equality (===) does not perform type coercion, so it compares the values and types directly.
//different types are not equal in strict comparison, even if their values are the same.

console.log(5 === 5); // true
console.log(5 === "5"); // false (strict equality)  

console.log(5 == 5);
console.log(5 == "5");    

console.log(0 == ""); // true (loose equality)
console.log(0 === ""); // false (strict equality)

console.log(true == 1); // true (loose equality)
console.log(false == 0); // true (loose equality)
console.log(true == "1"); // true (loose equality)
console.log(true === 1 ); // false (strict equality)
console.log(false === 0); // false (strict equality)
console.log(true === "1"); // false (strict equality)