const products = require("./product");
let cartItems = [];
// addToCart
const addToCart = (product) => {
    cartItems.push(product);
};
// getCartItems
const getCartItems = () => {
    return cartItems;
};
module.exports = { addToCart, getCartItems };