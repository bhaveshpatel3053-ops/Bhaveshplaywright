let arry = [1, 2, 3, 4, 5];
arry.push(6);  // Adds elements to the end of the array
console.log(arry); // Outputs: [1, 2, 3, 4, 5, 6]

arry.splice(2, 1); // Removes 1 element at index 2
console.log(arry); // Outputs: [1, 2, 4, 5, 6]

arry.splice(3, 0 , 100); // Inserts 100 at index 3 (no elements removed)
console.log(arry); // Outputs: [1, 2, 4, 100, 5, 6]

arry.splice(3,1,100); // Removes 1 element at index 3 and inserts 100  
console.log(arry); // Outputs: [1, 2, 4, 100, 5, 6]


let browers = ["Chrome", "Firefox", "Safari", "Edge"];
console.log(browers.length); // Outputs: 4
console.log(browers); // Outputs: ["Chrome", "Firefox", "Safari", "Edge"]

browers.pop(); // Removes the last element
console.log(browers); // Outputs: ["Chrome", "Firefox", "Safari"]

let removed = browers.shift(); // Removes the first element
console.log(removed); // Outputs: "Chrome"
console.log(browers); // Outputs: ["Firefox", "Safari"]

for (let i = 0; i < browers.length; i++) {
    console.log(browers[i]); // Outputs: "Firefox", "Safari"
    if (browers[i] === "Firefox") {
        console.log("Remove Firefox"); // Outputs: true
    }
    }
    