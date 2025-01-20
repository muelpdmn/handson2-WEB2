"use strict";
// NUMERIC ENUM
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let directions = [1, 2, 3, 4,];
console.log(Direction.Up);
// STRING ENUM
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
console.log("Direction: ", Direction.Down);
console.log("Color: ", Color.Green);
//# sourceMappingURL=04-enums.js.map