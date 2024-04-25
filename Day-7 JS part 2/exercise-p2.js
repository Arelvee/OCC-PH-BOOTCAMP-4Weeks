// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
function isEven(x) {
    return x % 2 === 0;
}

// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
for (let i = 0; i <= 10; i++) {
    console.log(`${i} is even: ${isEven(i)}`);
}

// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.
function multiply(a, b) {
    return a * b;
}

// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.
while (true) {
    let a = parseInt(prompt("Enter the first number (or a negative number to quit):"));
    if (a < 0) {
        break; // Exit the loop if a is negative
    }

    let b = parseInt(prompt("Enter the second number (or a negative number to quit):"));
    if (b < 0) {
        break; // Exit the loop if b is negative
    }

    let product = multiply(a, b);
    console.log("The product is:", product);
}

// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.
function reverseString(str) {
    return str.split("").reverse().join("");
}

// This is the result for the reverse String:
console.log(reverseString("Ralph")); // Output: "hplaR"
