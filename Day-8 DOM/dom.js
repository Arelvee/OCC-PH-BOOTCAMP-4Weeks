// Document Object Model
// Accessing elements
// accessing by id
let heading = document.getElementById("heading");
console.log(heading);
// accessing by className
let textElements = document.getElementsByClassName("text");
console.log(textElements);
// accessing by tag name
let listItems = document.getElementsByTagName("li");
console.log(listItems);
// querySelector
let containerElement = document.querySelector("#container");
console.log(containerElement);
// parent node
let listParent = document.querySelector("#list").parentNode;
console.log(listParent);
// children
let containerChildren = document.getElementById("container").children;
console.log(containerChildren);
// previous sibling
let firstListItem = document.querySelector("li");
let previousSibling = firstListItem.previousSibling;
console.log("Children: ", previousSibling);



// Modifying elements
heading.innerHTML = "<h6>Learning DOM Manipulation<h6>";
textElements[0].textContent = "This is a new paragraph";
console.log(textElements);

// setting attributes
heading.setAttribute("class", "highlight");

// changing style properties
const button = document.getElementById("btn");
button.style.backgroundColor = "skyblue";

// creating elements
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is another paragraph";
containerElement.appendChild(newParagraph);

// remove element
let elementToRemove = document.querySelector("li");
elementToRemove.remove();
console.log("Removed Element: ", elementToRemove);

// handling events
button.addEventListener("click", addListItem);
function addListItem() {
    const newListItem = document.createElement("li");
    newListItem.textContent = "Another Task";
    document.getElementById("list").appendChild(newListItem);
}