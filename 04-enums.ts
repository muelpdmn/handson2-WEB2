// NUMERIC ENUM
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let directions: number[] = [1, 2, 3, 4,];

console.log(Direction.Up);
// STRING ENUM
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}

console.log("Direction: ", Direction.Down);
console.log("Color: ", Color.Green);