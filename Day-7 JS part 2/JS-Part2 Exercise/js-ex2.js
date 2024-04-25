// Exercise 2
// Instructions:
// 1. Create a prompt for the user to input their date of birth. It should be in this format: MM/DD/YYYY. Store it in a variable 'dateOfBirth".
let dateOfBirth = prompt("Enter your date of birth (MM/DD/YYYY):");



// 2. Separate the dateOfBirth into three variables, birthMonth, birthDate and birthYear, by splitting it on the '/'. Be sure to parse each variable into integers.
const [birthMonth, birthDate, birthYear] = dateOfBirth.split('/').map(Number);
// 3. Calculate the age of the user by comparing using the Date() method to generate the current date, and comparing the birthMonth, birthDate and birthYear
const today = new Date();
let age = today.getFullYear() - birthYear;
const currentMonth = today.getMonth() + 1; // Months are zero-indexed in JS (0 = Jan)
const currentDate = today.getDate();

// Adjust age if birthday hasn't happened yet this year
if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate < birthDate)) {
    age--;
}



// 4. Output the calculated age into the console.
console.log("You are", age, "years old.");


// 5. Include the following checkings:

// a. The month should be between 1 and 12 (January to December)

// b. The day should be within the corresponding number of days of each month

// c. February 29 is a valid date only if the year is a leap year

// d. If it's the user's birthday, also log into the console the message "Happy Birthday!"


if (
    birthMonth < 1 || birthMonth > 12 || // Month check
    birthDate < 1 || birthDate > 31 || // Basic day check
    (birthMonth === 2 && birthDate > 29) || // Feb non-leap year
    (birthMonth === 2 && birthDate === 29 && !isLeapYear(birthYear)) || // Feb leap year
    (birthDate > daysInMonth(birthMonth, birthYear)) // Check days per month
) {
    console.error("Invalid date of birth entered.");
} else if (currentMonth === birthMonth && currentDate === birthDate) {
    console.log("Happy Birthday!");
}

// Helper Functions 
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function daysInMonth(month, year) {
    // Array approach for days in each month
    const daysPerMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysPerMonth[month - 1];
}