// Basic Function dengan tipe
function add(a: number, b: number): number {
    return a + b;
}

// Function dengan optional parameter
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}`
}

console.log(greet("John"));