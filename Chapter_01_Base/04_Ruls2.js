//1. Valid snake_case Variable Names

let first_name = "Bhavesh";
let total_amount_due = 1500;
let is_user_logged_in = true;
let max_retry_attempts = 3;

//02. Practical Example in Code
// Using snake_case for variables and functions
let user_account_balance = 2500.50;
let monthly_interest_rate = 0.05;

function display_account_summary() {
  let final_balance = user_account_balance * (1 + monthly_interest_rate);
  console.log("Updated Balance:", final_balance);
}

display_account_summary();

//03. Constants in Screaming_snake_case
const MAX_LOGIN_ATTEMPTS = 3;
const API_BASE_URL = "https://api.example.com/v1";
const DEFAULT_TIMEOUT_MS = 5000;
const TAX_RATE = 0.08;

// 04. Hungarian Notation in JavaScript
// Strings
let strUserName = "Bhavesh";
let sEmail = "user@example.com";

// Numbers / Integers
let iItemCount = 5;
let nPrice = 199.99;

// Booleans / Flags
let bIsValid = true;
let fIsLoading = false;

// Arrays
let arrUserRoles = ["Admin", "User"];

// Objects
let objConfig = { theme: "dark" };