
// Declare the DOM ELEMENTS
const timerDisplay = document.getElementById("timerDisplay");
const minutesInput = document.getElementById("minutesInput");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");


let timerPromise; // Variable to store the timer's promise
let continueTimer = true; // Add a boolean variable to track whether the timer should continue running

//Event Handling
startButton.addEventListener("click", startTime); //3. handle event when start button is clicked
resetButton.addEventListener("click", resetTimer); //  4. handle event when reset time button is clicked


// 1. function to start time
function startTime() {
    continueTimer = true; // Reset the continueTimer variable
    const minutes = parseFloat(minutesInput.value);

    if (!isNaN(minutes) && minutes >= 1 && minutes <= 60) {
        startTimer(minutes);
    } else {
        alert("Please enter a valid number between 1 and 60.");
    }
}

// 2. Function to reset the timer (simplified)

function resetTimer() {
    continueTimer = false; // Stop the timer (if it's running)
    seconds = 0; // Reset seconds to 0
    minutes = 0; // Reset minutes to 0
    timerDisplay.textContent = "00:00";
    minutesInput.value = ""; // Clear input field
}
//5. asynchronous function with await and promise applied inside
async function startTimer(minutes) {
    let seconds = 0;

    // Update timer display
    const updateDisplay = () => {
        timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
            seconds
        ).padStart(2, "0")}`;
    };


    // Timer loop
    while (minutes > 0 || seconds > 0) {
        if (!continueTimer) break; // Check continueTimer in the loop

        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
        seconds--;

        if (seconds < 0 && minutes > 0) {
            seconds = 59;
            minutes--;
        }

        updateDisplay();
    }

    // Time's up alert (no changes needed)
    if (continueTimer) {
        alert("Time's up!");
    }
}


