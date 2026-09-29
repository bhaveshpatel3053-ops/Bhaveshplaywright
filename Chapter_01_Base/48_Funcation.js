//Functions
function greet(name) {
  return `Hello, ${name}`;
}

const person = {
  name: "Bhavesh",
  greet() {
    return `Hello, ${this.name}`;
  }
};

console.log(greet("Bhavesh")); // standalone function
console.log(person.greet());


