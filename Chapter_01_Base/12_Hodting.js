// JS Engine
// LINE BY LINE, , JIT Compilation

console.log(greeting);
var greeting = "Hello";
console.log(greeting);

// Behind the scenes:
// var greeting; <-- hoisted with undefined
// console.log(greeting); <-- undefined
// greeting = "Hello!"; <-- assignment stays in place
// console.log(greeting); <-- "Hello!"

// Var a;
console.log(a);
var a = "Hello";
console.log(a);

function getUserStatus() {
    //var status_code; JS Egine (optimized the code)
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
}

getUserStatus();

// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.