"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Object type annotation 
let user = {
    name: "John",
    age: 30,
    email: "john@example.com",
};
// Implementasi Interface
let employee = {
    id: 1,
    name: "Jane Doe",
    department: "IT",
    salary: 50,
    contact: "johndoes@example.com",
};
let company = {
    name: "Tech Corp",
    address: {
        street: "123 Main St",
        city: "Tech City",
        country: "Techland",
    },
    employess: [employee],
};
console.log("User : ", user);
console.log("Employee : ", employee);
console.log("Company : ", company);
//# sourceMappingURL=06.objects.js.map