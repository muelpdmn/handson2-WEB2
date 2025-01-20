"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// DEKLARASI TUPLE
let person = ["John", 38, true];
// TUPLE UNTUK KOORDINAT
let coordinate = [10.5, 20.1];
// TUPLE DENGAN OPTIONAL ELEMENT
let optionalTuple = ["Hello"];
optionalTuple = ["Hello", 42];
// Destructing tuple
let [name, age, isEmployed] = person;
console.log("Name : ", name);
console.log("Age : ", age);
console.log("Employed : ", isEmployed);
// TUPLE DALAMA ARRAY
let employees = [
    ["John", 30],
    ["Jane", 25],
    ["Bob", 35],
];
employees.forEach(([name, age]) => {
    console.log(`${name} is ${age} years old`);
});
//# sourceMappingURL=03-tuples.js.map