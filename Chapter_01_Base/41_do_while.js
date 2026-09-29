let i = 11;
do {
    console.log(i);
    i++;
} while (i <= 10);

let retry = 0;
do {
    console.log("Attempting to connect...");
    console.log("Retrying...", retry);
    retry++;
} while (retry < 3);