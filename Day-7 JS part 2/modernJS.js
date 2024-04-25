// Arrow Function
// Arrow Function
const greet = () => console.log("Hello, OneCoders");
greet();
const square = (a) => console.log("Square: ", a * a);
square(5);
// Template literals
let name = "Abbi";
let age = 24;
// console.log("Hi! I'm " + name + " and I am " + age + " years old");
console.log(`Hi! I'm ${name} and I am ${age} years old`);

// Destructuring
// DRY
// array
let nums = [24, 23, 13];
// console.log(nums[0]);
let [firstNum, secondNum, thirdNum] = nums;
console.log(`${firstNum}`);
// objects
const numbers = {
    first: 1,
    second: 2,
    third: 3,
};
let { first, second, third } = numbers;
// numbers.first
console.log(`First: ${first}`);

// Spread and Rest ...
// Spread
function sum(x, y, z) {
    return x + y + z;
}
// let nums = [24, 23, 13];
console.log(sum(...nums));
// Rest
function myFunction(firstArg, ...restOfArgs) {
    console.log(firstArg);
    console.log(restOfArgs);
}
myFunction("one", "two", "three", "four");
// Default parameters
function multiply(a = 10, b = 5) {
    return a * b;
}
console.log(multiply(9, 5));
console.log(multiply());