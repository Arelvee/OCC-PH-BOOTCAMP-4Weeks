// Functions
function greet() {
    console.log("Hello, welcome to the world of functions");
}
greet();
// console.log("Square for function expression: ", squareExpression(5)); - function hoisting will not work with function expression
// Ways of Writing Functions
// 1. Function Declaration
function squareDeclaration(num) {
    return num * num;
}
// 2. Function Expression
const squareExpression = function (num) {
    return num * num;
};
console.log("Square for Function Declaration: ", squareDeclaration(6));
console.log("Square for function expression: ", squareExpression(5));
// Function Hoisting - function declaration
sayHello();
function sayHello() {
    console.log("Hello, function hoisting");
}
// anonymous function
const anonymousFunction = function () {
    console.log("Hello anonymous function");
};
anonymousFunction();