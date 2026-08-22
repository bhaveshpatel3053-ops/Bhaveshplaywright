console.log("Hello I am bhavesh");
console.log(process.platform);
console.log(process.arch);
console.log("Node code:", process.version);

function add(a, b) {
    return a + b;
}
let result;
for (let i = 0; i < 10000; i++) {
    result = add(i, i + 1);
}
console.log("After 10000 calls:", result);