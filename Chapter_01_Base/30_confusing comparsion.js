//1. Loose Equality (==) Surprises
0 == false; // true (false is converted to the number 0)
"" == 0;    // true (an empty string is converted to 0)
[] == 0;    // true (an empty array is converted to 0)

//2. The NaN Trap

NaN == NaN; // false (NaN is not equal to anything, including itself)
NaN === NaN; // false (strict equality also fails for NaN)

//3. Comparing Objects and Arrays
{} == {}; // false (different object references)
[] == []; // false (different array references)

[] === [];       // false (two different array boxes in memory)
let a = [1, 2];
let b = a;
a === b;         // true (both point to the exact same array)

//4. null vs. undefined
null == undefined; // true (loose equality considers them equal)
null === undefined; // false (strict equality considers them different types)


// ---------- 10. Quick interview cheats ----------
// "" == 0          -> true
// "" == "0"        -> false
// 0 == "0"         -> true
// null == undefined -> true
// null == 0        -> false but null >= 0 -> true
// NaN == NaN       -> false
// [] == ![]        -> true (![] -> false -> 0; [] -> "" -> 0)
//console.log([] == ![]); // true 🤯

// ================================================
// TAKEAWAY: Always use === (and !==).
// Use == only for null/undefined check: if (x == null) { ... }
// Use Object.is for NaN and -0 edge cases.
// ================================================