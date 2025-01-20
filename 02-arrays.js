"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Cara 1: tipe[]
var numbers = [1, 2, 3, 4, 5];
var names = ["Samuel", "Pardamean", "Pardosi"];
// Cara 2: Array[]
var scores = [1, 2, 3, 4];
var fruits = ["Apple", "Orange", "Banana"];
// Array dengan multiple types (union type)
var mixed = [1, "two", 3, "four"];
// Array methods
numbers.push(6); // Menambah element
names.pop(); // Menghapus element terakhir
// Iterasi Array
numbers.forEach(function (num) {
    console.log("Number: ", num);
});
// Array mapping
var doubledNumbers = numbers.map(function (num) { return num * 2; });
console.log("Doubled numbers: ", doubledNumbers);
