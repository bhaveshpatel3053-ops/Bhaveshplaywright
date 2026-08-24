//1. Starting Character Rule

let name = "Bhavesh"; // Starts with a letter
let _score = 95;     // Starts with an underscore
let $price = 50;     // Starts with a dollar sign

// Fail Scenario
let 1stUser = "Alice"; 
// Uncaught SyntaxError: Invalid or unexpected token
// (Fails because it starts with a number)

// 2. Subsequent Characters Rule
// Valid Scenario
let user_id$2 = "Admin"; // Contains letters, underscores, and dollar signs after the first character

//Fail Scenario
let user-name = "Bob"; 
// Uncaught SyntaxError: Unexpected token '-'
// (Fails because hyphens are not allowed; JS treats it as a minus operator)

//3. Reserved Keywords Rule
let myClass = "Science"; // Allowed because it's a unique combination
// Fail Scenario:
let class = "Science"; 
// Uncaught SyntaxError: Unexpected token 'class'
// (Fails because 'class' is a reserved JavaScript keyword)

//4. Case Sensitivity Rule
let total = 100;
let Total = 200;
console.log(total); // Outputs: 100
console.log(Total); // Outputs: 200 (Treats them as completely different variables)

// Fail Scenario
let total = 100;
let Total = 200;
console.log(total); // Outputs: 100
console.log(Total); // Outputs: 200 (Treats them as completely different variables)
// Fail Scenario
let amount = 500;
console.log(Amount); 
// Uncaught ReferenceError: Amount is not defined
// (Fails because JavaScript is case-sensitive, and 'Amount' with a capital 'A' was never declared)