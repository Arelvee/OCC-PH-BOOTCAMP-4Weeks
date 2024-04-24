// Loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is a multiple of 3 and 5 (FizzBuzz)
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        // Check if the number is a multiple of 3 (Fizz)
    } else if (i % 3 === 0) {
        console.log("Fizz");
        // Check if the number is a multiple of 5 (Buzz)
    } else if (i % 5 === 0) {
        console.log("Buzz");
        // Print the number otherwise
    } else {
        console.log(i);
    }
}
