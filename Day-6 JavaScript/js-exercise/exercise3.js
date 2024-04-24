// Function to calculate the grade based on the score
function calculateGrade(score) {
    // Check if the score is outside the valid range (0 to 100)
    if (score < 0 || score > 100) {
        // Return an error message if the score is invalid
        return "Invalid score! Score must be between 0 and 100.";
    } else {
        // Determine the grade based on the score scenario on the exercise
        if (score >= 90) {
            return 'A';
        } else if (score >= 80) {
            return 'B';
        } else if (score >= 70) {
            return 'C';
        } else if (score >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }
}

// Flag to control whether to continue grading or not
let continueGrading = true;

// Loop to allow the user to enter scores until they decide to stop
while (continueGrading) {
    // Prompt the user to enter a score
    const score = parseInt(prompt("Enter the score:"));

    // Calculate the grade based on the entered score
    const grade = calculateGrade(score);

    // Display the calculated grade to the user
    console.log("The grade is: " + grade);

    // Ask the user if they want to continue grading
    const continueInput = prompt("Do you want to continue grading? (yes/no)");

    // If the user does not want to continue, set continueGrading to false to exit the loop
    if (continueInput.toLowerCase() !== 'yes') {
        continueGrading = false;
    }
}

// Display a goodbye message when grading is finished
console.log("Goodbye! Thank you for grading.");
