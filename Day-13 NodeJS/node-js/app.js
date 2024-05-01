//app

const products = require("./product");
const cart = require("./cart");
const calculateTotal = require("./order");

// add products to the cart
cart.addToCart(products[0]);
cart.addToCart(products[2]);

// display the cart items
console.log("Cart Items: ", cart.getCartItems());


// calculate and display the total order amount

const totalAmount = calculateTotal(cart.getCartItems());
console.log(`Total order amount: $${totalAmount}`);