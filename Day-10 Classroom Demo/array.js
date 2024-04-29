// Create an Empty Array
let course = [];
console.log(course);

// Create an Array and Initialing the Variable
let courses = ["HTML", "CSS", "JavaScript", "React"]; // one dimensional array
console.log(courses);
// let subject = ["HTML"];


//Array Constructor
let code= new Array(5);
console.log(code);

code[0] = 10;
code[1] = 20;
code[3] = 30;

// Array Constructor with array elements inside

let colors = new Array("red","green","blue");
console.log(colors);



//1 Accessing our Array Elements
let NewCourses = ["HTML", "CSS", "Javascript", "React", "Express", "VueJS"];

console.log(NewCourses[2]);
console.log(NewCourses[4]);

//Multidimensional Arrays - an array inside another array : nested arrays



let peopleInfo = [
    ["John", "New York", "30"],["Alice", "Los Angeles", "25"],
]
console.log(peopleInfo[0]);
console.log(peopleInfo[1]);
console.log(peopleInfo[0][1]);


//Adding an element to the beginiing
NewCourses.unshift("Web Development");
console.log(NewCourses);

//remove the last element
let lastElement = NewCourses.pop();
console.log(NewCourses);


//remove and returns the first element
let firstElement = NewCourses.shift();
console.log(NewCourses);

//Iterate through using forEach Loop
NewCourses.forEach(function myfunction(elements) {

console.log(elements);

})

// Concatenate
let arr1 = [1, 2, 3];
            let arr2 = [4, 5];
            let combinedArray = arr1.concat(arr2);
            console.log(combinedArray); // Output: [1, 2, 3, 4, 5]

// Convert Array to String
console.log(NewCourses.toString());

// check the tyype
console.log(typeof NewCourses);

//Array Methods

let numbers = [1, 2, 3, 4, 5];

// length
console.log('Array length:', numbers.length);

// indexOf
console.log('Index of 3:', numbers.indexOf(3));

// includes
console.log('Includes 2:', numbers.includes(2));

// join
console.log('Joined array:', numbers.join('------------>'));

// slice
let slicedArray = numbers.slice(1, 4);
console.log('Sliced array:', slicedArray);

// splice
let removedElements = numbers.splice(2, 2);
console.log('Removed elements:', removedElements);
console.log('Updated array:', numbers);