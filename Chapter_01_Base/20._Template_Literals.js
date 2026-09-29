// 28_Template_Literals.js - Examples of template strings in JavaScript

// 1. Basic Template Literal with Backticks (``)
let greeting = `Hello, World!`;
console.log("Basic:", greeting);

// 2. Variable Interpolation (Embedding variables using ${...})
let firstName = "Maharsh";
let lastName = "Patel";
let fullName = `Full Name: ${firstName} ${lastName}`;
console.log(fullName);

// 3. Embedding Expressions and Calculations
let price = 100;
let taxRate = 0.18;
let total = `Total Amount (with tax): ${price + (price * taxRate)}`;
console.log(total);

// 4. Multi-line Strings without escape characters
let address = `
  Street: 123 Code Avenue,
  City: Vadodara,
  State: Gujarat
`;
console.log("Multi-line Address:", address);

// 5. Nested Template Literals
let isAuthorized = true;
let accessMessage = `Status: ${isAuthorized ? `Welcome, ${firstName}!` : `Access Denied`}`;
console.log(accessMessage);