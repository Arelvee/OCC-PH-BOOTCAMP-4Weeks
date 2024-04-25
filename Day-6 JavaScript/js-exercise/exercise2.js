// The forecast today is 293 Kelvin. This value will not change.
const kelvin = 300;

// Subtracting 273 from Kelvin to get the temperature in Celsius.
const celsius = kelvin - 273;

// Calculating Fahrenheit from Celsius.
let fahrenheit = celsius * (9/5) + 32;

// Displaying the temperature in Fahrenheit.
console.log(`The temperature is ${fahrenheit}°F.`);
