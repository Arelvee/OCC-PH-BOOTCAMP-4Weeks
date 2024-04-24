// Prompt the user to enter the starting and ending numbers for the range
const startNum = parseInt(prompt("Enter the starting number:"));
const endNum = parseInt(prompt("Enter the ending number:"));

// Check if the inputs are valid numbers
if (!isNaN(startNum) && !isNaN(endNum)) {
    // Loop to iterate through the numbers in the range and print each number
    console.log("Numbers between " + startNum + " and " + endNum + ":");
    for (let i = startNum; i <= endNum; i++) {
        console.log(i);
    }
} else {
    // Print an error message if the inputs are not valid numbers
    console.log("Invalid input! Please enter valid numbers.");
}
