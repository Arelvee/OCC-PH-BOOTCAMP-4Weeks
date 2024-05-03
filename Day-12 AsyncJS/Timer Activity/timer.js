// Declare the DOM ELEMENTS
const timerDisplay = document.getElementById("timerDisplay");
const minutesInput = document.getElementById("minutesInput");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");

let continueTimer = true; // Add a boolean variable to track whether the timer should continue running

// Event Handling
startButton.addEventListener("click", startTime); // handle event when start button is clicked
resetButton.addEventListener("click", resetTimer); // handle event when reset time button is clicked

// Function to start time
function startTime() {
    continueTimer = true; // Reset the continueTimer variable
    const minutes = parseFloat(minutesInput.value);

    if (!isNaN(minutes) && minutes >= 1 && minutes <= 60) {
        startTimer(minutes);
    } else {
        alert("Please enter a valid number between 1 and 60.");
    }
}

// Function to reset the timer (simplified)
function resetTimer() {
    continueTimer = false; // Stop the timer (if it's running)
    timerDisplay.textContent = "00:00";
    minutesInput.value = ""; // Clear input field
}

// Asynchronous function with await and promise applied inside
async function startTimer(minutes) {
    let seconds = 0;

    // Update timer display
    const updateDisplay = () => {
        if (continueTimer) { // Check continueTimer before updating
            timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
                seconds
            ).padStart(2, "0")}`;
        }
    };

    // Timer loop
    while (minutes > 0 || seconds > 0) {
        try {
            await new Promise((resolve, reject) => {
                const timerId = setTimeout(() => {
                    if (!continueTimer) {
                        clearTimeout(timerId); // Clear the timer
                        reject(new Error('Timer stopped.')); // Reject the promise if continueTimer becomes false
                    } else {
                        clearTimeout(timerId); // Clear the timer
                        resolve(); // Resolve the promise after 1 second
                    }
                }, 1000);
            });

            seconds--;

            if (seconds < 0 && minutes > 0) {
                seconds = 59;
                minutes--;
            }

            updateDisplay();
        } catch (error) {
            console.error(error.message); // Log the error message to the console
            return; // Break out of the loop if an error occurs
        }
    }

    // Time's up alert
    if (continueTimer) {
        alert("Time's up!");
    }
}
