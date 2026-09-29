// 1. UNDEFINED: A variable declared without an assigned value
let user;
console.log(user);          // Output: undefined
console.log(typeof user);   // Output: undefined

// 2. NULL: An intentional empty value assigned by the developer
let selectedItem = null;
console.log(selectedItem);        // Output: null
// Note: Due to a historical bug in JS, typeof null returns "object"
console.log(typeof selectedItem); // Output: object

// 3. Comparison
console.log(undefined == null);   // Output: true (loose equality)
console.log(undefined === null);  // Output: false (strict equality - different types)