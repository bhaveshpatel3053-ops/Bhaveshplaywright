//Documenting Hungarian Notation in Comments
// Function processing user data using traditional Hungarian naming
function processUserData(strName, iAge, bIsActive) {
    // strName: stores the full name string
    // iAge: stores the numeric age
    // bIsActive: flag for account status
    
    console.log(`Processing ${strName}, age ${iAge}. Active: ${bIsActive}`);
}

//JSDoc Comments (The Modern JavaScript Standard)

/**
 * Processes user details.
 * @param {string} userName - The name of the user (replaces 'strUserName')
 * @param {number} userAge - The age of the user (replaces 'iUserAge')
 * @param {boolean} isActive - Account status flag (replaces 'bIsActive')
 */
function handleUser(userName, userAge, isActive) {
    // Code logic here
}

// Inline Comments for Clarification
JavaScript
// 'timeout' is a plain name, comment clarifies it is stored in milliseconds
const timeout = 5000; // time in ms

// 'maxRetryCount' tells us the exact semantic limit
const maxRetryCount = 3;

