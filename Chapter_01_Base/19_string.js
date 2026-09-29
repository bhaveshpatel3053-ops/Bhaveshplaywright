// 27_Literal_String_all.js - Examples of string types and operations in JavaScript

// 1. Single Quotes
let singleQuoteStr = 'Hello, World!';
console.log("Single Quote:", singleQuoteStr);

// 2. Double Quotes
let doubleQuoteStr = "Hello, JavaScript!";
console.log("Double Quote:", doubleQuoteStr);

// 3. Template Literals (Backticks ``) - Allows embedding variables and multi-line strings
let userName = "Maharsh";
let greeting = `Hello, ${userName}! Welcome to JavaScript learning.`;
console.log("Template Literal:", greeting);

// Multi-line string using template literals
let multiLine = `
  This is line one.
  This is line two.
`;
console.log("Multi-line String:", multiLine);

// 4. String with Escape Characters
// Using \' for single quote inside single-quoted string, or \n for a new line
let escapedStr = 'It\'s a wonderful day for coding.\nKeep practicing!';
console.log("Escaped String:\n" + escapedStr);

// 5. String Object (Wrapper object - Best practice is to avoid and use primitive strings)
let stringObject = new String("Pramod");
console.log("String Object:", stringObject);
console.log("Type of String Object:", typeof stringObject); // "object"