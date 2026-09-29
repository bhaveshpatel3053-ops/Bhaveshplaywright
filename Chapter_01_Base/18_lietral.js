// 1. Decimal Integer (Standard whole numbers)
let decimalInt = 42;
console.log("Decimal Integer:", decimalInt);

// 2. Binary (Base 2, starts with 0b or 0B)
let binaryNum = 0b1010; // Equivalent to 10 in decimal
console.log("Binary (0b1010):", binaryNum);

// 3. Octal (Base 8, starts with 0o or 0O)
let octalNum = 0o52; // Equivalent to 42 in decimal
console.log("Octal (0o52):", octalNum);

// 4. Hexadecimal (Base 16, starts with 0x or 0X)
let hexNum = 0x2A; // Equivalent to 42 in decimal
console.log("Hexadecimal (0x2A):", hexNum);

// 5. Float (Decimal numbers)
let floatNum = 3.14;
console.log("Float:", floatNum);

// 6. Exponential (Scientific notation)
let exponentialNum = 1.5e3; // 1.5 * 10^3 = 1500
console.log("Exponential (1.5e3):", exponentialNum);

// 7. Numeric Separator (Underscores for readability, ES2021+)
let largeNum = 1_000_000;
console.log("Numeric Separator (1_000_000):", largeNum);

// 8. BigInt (For arbitrary large integers)
let bigIntNum1 = 123n;
let bigIntNum2 = BigInt(123);
console.log("BigInt literal:", bigIntNum1);
console.log("BigInt constructor:", bigIntNum2);

// 9. Infinity (Result of division by zero or numbers exceeding limit)
let infiniteNum = 1 / 0;
console.log("Infinity:", infiniteNum);

// 10. NaN (Not-a-Number, invalid numeric operation)
let notANumber = "hello" / 2;
console.log("NaN:", notANumber);

// 11. Number Object (Wrapper object - Best practice is to avoid and use primitives)
let numberObject = new Number(42);
console.log("Number Object:", numberObject);
console.log("Type of Number Object:", typeof numberObject); // "object"

/*| Type/Form | Code Example | Output / Explanation |
|---|---|---|
| Decimal Integer | let a = 42; | console.log(a); // 42 |
| Binary | let b = 0b1010; | console.log(b); // 10 (Binary for 10) |
| Octal | let c = 0o52; | console.log(c); // 42 (Octal for 42) |
| Hexadecimal | let d = 0x2A; | console.log(d); // 42 (Hex for 42) |
| Float | let e = 3.14; | console.log(e); // 3.14 |
| Exponential | let f = 1.5e3; | console.log(f); // 1500 (1.5 * 10^3) |
| Numeric Separator | let g = 1_000_000; | console.log(g); // 1000000 |
| BigInt | let h = 123n; <br>let h2 = BigInt(123); | console.log(h); // 123n |
| Infinity | let i = 1 / 0; | console.log(i); // Infinity |
| NaN | let j = "hello" / 2; | console.log(j); // NaN |
| Number Object | let k = new Number(42); | console.log(k); // [Number: 42] (Object) |
// /</br> 