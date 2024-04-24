function findLargestNumber(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
        return "Array is empty";
    }

    // Initialize a variable to store the largest number
    let largest = numbers[0];

    // Loop through the array elements starting from the second element
    for (let i = 1; i < numbers.length; i++) {
        // Compare the current element with the current largest number
        // Update the largest number if the current element is greater
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    // Return the largest number found
    return largest;
}

// This is the implementation part of finding the largest number in an array:
const numbers = [10, 5, 20, 15, 30, 98, ]; // add array values
const largestNumber = findLargestNumber(numbers);  //tagged the functoion to find largerst number
console.log("The largest number is:", largestNumber); //print and display the number
