    // ternary operator
    let Bhavehs_age = 18;
    let Bhavesh_go_to_goa = Bhavehs_age > 18 ? "Yes, Bhavesh can go to Goa" : "No, Bhavesh cannot go to Goa";
    console.log(Bhavesh_go_to_goa); // Output: No, Bhavesh cannot go to Goa
    let Bhavesh_go_to_goa2 = Bhavehs_age >= 18 ? "Yes, Bhavesh can go to Goa" : "No, Bhavesh cannot go to Goa";
    console.log(Bhavesh_go_to_goa2); // Output: Yes, Bhavesh can go to Goa

let evironment = "staging";
let baseUrl = evironment == "production" ? "https://api.production.com" : "https://api.development.com";
console.log(baseUrl); // Output: https://api.development.com

let response = 200;
let sla = 1000;
let slastatus = response <= sla ? "SLA met" : "SLA not met";
console.log(`Response ${response} - ${slastatus}`); // Output: Response 200 - SLA met

let Masteradmin = "admin";
let userRole = Masteradmin ? "admin" : "user";
console.log(userRole); // Output: admin

//Nested ternary operator
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log(`Score: ${score}, Grade: ${grade}`); // Output: Score: 85, Grade: B 

let Bhavesh_age = 22;
let Bhavesh_driving_status = Bhavesh_age > 18 ? (Bhavesh_age > 21 ? "Can drive and drink" : "Can drive but cannot drink") : "Cannot drive";
console.log(Bhavesh_driving_status); // Output: Can drive but cannot drink

let statusCode = 404;3
let category =
statusCode < 300 ? "Success" :
statusCode < 400 ? "Redirection" :
statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status: ${statusCode}, ${category}`); // Output: Status Code: 404, Category: Client Error

let a=5; c=10; D=15;
let result = a >= D ? "a is greater than D" : a < D ? "a is less than D" : "a is equal to D";
console.log(result); // Output: a is less than D

let temperature = 30;
let feel = (temperature >= 40) ? "It's hot" :
(temperature >= 30) ? "Hot" :
(temperature >= 20) ? "It's warm" : "It's cold";
console.log ("C. temperature", temperature, "|  feel", feel); // Output: 7. temperature 30 | feel Hot
