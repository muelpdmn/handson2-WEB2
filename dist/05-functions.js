"use strict";
// Basic Function dengan tipe
function add(a, b) {
    return a + b;
}
// Arrow function dengan tipe
const multiply = (x, y) => {
    return x * y;
};
// Function dengan optional parameter
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}`;
}
//console.log(greet("John"));
function createEmail(to, subject = "No Subject") {
    return `Email to : ${to}, Subject: ${subject}`;
}
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
function processInput(input) {
    if (typeof input === "number") {
        return input * 2;
    }
    return input.toUpperCase();
}
//# sourceMappingURL=05-functions.js.map