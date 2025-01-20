// Object type annotation 
let user: {name: string; age: number; email: string } = {
    name: "John",
    age: 30,
    email: "john@example.com",
};

// INTERFACE UNTUK OBJECT
interface Employee {
    id: number;
    name: string;
    department: string;
    readonly salary: number; // readonly property
    contact?: string;  // optional property 
}

// Implementasi Interface
let employee: Employee = {
    id: 1,
    name: "Jane Doe",
    department: "IT",
    salary: 50,
    contact: "johndoes@example.com",
};

// Nested Objects
interface Company {
    name: string;
    address: {
        street: string;
        city: string;
        country: string;
    };
    employess: Employee[];
}

let company: Company = {
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

export {};