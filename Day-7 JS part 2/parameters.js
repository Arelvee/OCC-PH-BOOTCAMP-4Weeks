function greet(name) {
    // parameter
    console.log("Hello, ", name);
}
greet("John"); //argument
// Function with a return value
function sum(a, b) {
    return a + b;
}
console.log("Sum: ", sum(3, 5));

// Variable scopes
let globalVar = "I am global";
console.log(globalVar);
// Function with local variable
function localScope() {
    let localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}
localScope();
// console.log(localVar);

// Higher Order Function
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}
// Callback function
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
// Using higher-order with callback
let resultAdd = calculate(5, 3, add);
console.log(resultAdd);
let resultSubtract = calculate(5, 3, subtract);
console.log(resultSubtract);