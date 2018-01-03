// Prompt user for the current temperature in Kelvins
const kelvin = prompt('What is the Kelvin temperature today?');

// Subtract 273 from the kelvin amount to find the tempretature in celcius
const celcius = kelvin - 273;

// Multiple celcius by nine fiths and add 32 to find the temprature in fahrenheit
let fahrenheit = celcius * (9/5) + 32;

// Round fahrenheit to get an even number using .floor method
fahrenheit = Math.floor(fahrenheit);

// Log to the console using string interpolation
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
