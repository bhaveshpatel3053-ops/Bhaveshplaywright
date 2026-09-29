// 1. Single Quotes ('...')
// Used for standard strings. You must escape single quotes if used inside (e.g., 'It\'s').
let singleStr = 'Hello using Single Quotes';
console.log(singleStr);

// 2. Double Quotes ("...")
// Functionally identical to single quotes. Allows easy use of single quotes inside without escaping.
let doubleStr = "Hello using Double Quotes";
console.log(doubleStr);

// 3. Backticks / Template Literals (`...`)
// Supports variable interpolation (${...}), expressions, and multi-line strings natively.
let name = "Maharsh";
let backtickStr = `Hello ${name} using Backticks (supports multi-line and variables)`;
console.log(backtickStr);