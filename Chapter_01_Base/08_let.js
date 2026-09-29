// let - Block Scoped
let a = 10;

let retryCount = 10;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount);

//let retryCount = 6;

let testStstus = "Passed"
    if (testStstus == "Passed"); {
    let executiontime = 1200; // Block Scoped
    console.log("Execution time:", executiontime); // ReferenceError: executiontime is not defined
}
// {} - Block
// if(){y}
// funcion name(){}

// let = loyal
// var = varirable / triator