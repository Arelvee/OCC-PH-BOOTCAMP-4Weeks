// Exercise 1
// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.

const square = (num) => num * num;
console.log(square(5)); // Output: 25

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.

const welcomeMessage = (name, age) => `Welcome, ${name}! You are ${age} years old.`;
console.log(welcomeMessage('Ralph', 31)); // Output: Welcome, Ralph! You are 31 years old.




// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.

const person = {
    firstName: 'Ralph Laurence',
    lastName: 'Visaya'
  };
  const { firstName, lastName } = person;
  console.log(firstName, lastName); // Output: John Doe
  



// Task 4: Use the spread operator to merge two arrays into a single array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]



// Task 5: Use default parameters to create a function that calculates the area of a rectangle. A = l x w

function calculateArea(length, width = 10) {
    return length * width;
}
let area = calculateArea(5); 
console.log(area); // Output: 50 (uses default width of 10)



// Task 6: Create an object called "Person" with properties for name and age, and a method to introduce the person. Instantiate the object and call the introduce method.

const Person = {
    name: 'Alice',
    age: 25,

    introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
  Person.introduce(); // Output: Hi, my name is Alice and I am 25 years old.