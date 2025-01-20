"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Cara 1: tipe[]
let numbers = [1, 2, 3, 4, 5];
let names = ["Samuel", "Pardamean", "Pardosi"];
// Cara 2: Array[]
let scores = [1, 2, 3, 4];
let fruits = ["Apple", "Orange", "Banana"];
// Array dengan multiple types (union type)
let mixed = [1, "two", 3, "four"];
// Array methods
numbers.push(6); // Menambah element
names.pop(); // Menghapus element terakhir
// Iterasi Array
numbers.forEach((num) => {
    console.log("Number: ", num);
});
// Array mapping
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers: ", doubledNumbers);
//# sourceMappingURL=02-arrays.js.map