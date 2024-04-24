// JS Operators and how to use them in expressions
// Arithmetic Operators
let a = 10;
let b = 5;


// Addition: +
// a = a + b;
// console.log(a);
// compound assignment operator
a += b;
console.log(a);

// Subtraction: a = a - b
a -= b;
console.log(a);

// Multiplication: a = a * b
a *= b;
console.log(a);

// Division: a = a / b
a /= b;
console.log(a);

// Modulo: a = a % b
a %= b; //a = 10 % 5 => a = 0
console.log(a);

// Comparison Operators
let x = 10;
let y = 5;
console.log(x > y); //greater than
console.log(x < y); //less than
console.log(x >= y); //greater than or equal to
console.log(x <= y); //less than or equal to
console.log(x == y); //equal
console.log(x != y); //not equal
console.log(50 == "50"); //true, loose equality
console.log(50 === "50"); //false, strict equality
console.log(50 !== "50"); //true, strict equality
// Logical Operators
let sunny = true;
let warm = false;
// AND - &&
console.log("Sunny and warm: ", sunny && warm);
// OR - ||
console.log("Sunny OR warm: ", sunny || warm);
// NOT - !
console.log("Not sunny: ", !sunny);

// Unary Operators - (--)decrement, (++)increment
let num = 1;
// num + 1
num++;
console.log(num);
num--;
console.log(num);


// typeof operator
console.log(typeof activeStatus);
console.log(typeof member);

// Ternary Operators
let activeStatus = false;
let member = activeStatus ? "Registered" : "Not Registered";
console.log(member);
// typeof operator
console.log(typeof activeStatus);
console.log(typeof member);
// Function Call Expressions
function greeting() {
    console.log("Hey there!");
}
greeting();