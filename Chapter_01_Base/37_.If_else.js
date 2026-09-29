let Number = 7;
if (Number === 7) {
    console.log("The number is odd");
}
else {
    console.log("The number is even");
}

let Score = 55;
if (Score >= 80) {
    console.log("Grade A");
} 
else if (Score >= 70) {
    console.log("Grade B");
}
    else if (Score >= 60) {
    console.log("Grade D");
}
else {
    console.log("Grade F");
}

let No = 7;
    if (No % 2 === 0) {
        console.log(No + " is an even number");
    }
    else {
        console.log(No + " is an odd number");
    }

    let year = 4000;
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year + " is a leap year");  
    } else {
        console.log(year + " is not a leap year");
    }