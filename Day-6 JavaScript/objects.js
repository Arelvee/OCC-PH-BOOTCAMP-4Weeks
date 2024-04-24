// Object Literals - key-value pairs {}
const person = {
    //key-value pairs
    firstName: "John",
    lastName: "Doe",
    age: 25,
    hobbies: ["reading", "coding", "sleeping"],
    greet: function () {
        console.log("Hello, my name is " + person.firstName);
    },
};
console.log(person.firstName);
console.log(person.age);
// modify object properties
person.lastName = "Smith";
console.log(person.lastName);
// access object methods
person.greet();
// Add more properties
person.nationality = "American";
console.log(person.nationality);
// add more methods
person.introduce = function () {
    console.log("I am " + person.firstName + " " + person.lastName);
};
person.introduce();
// nesting objects
const address = {
    street: "123 Main St",
    city: "New York",
    country: "USA",
};
person.address = address;
console.log(person.address.city);
// destructure
const { firstName, lastName, age } = person;
console.log(firstName);