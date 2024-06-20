"use strict";
//              🚀 Day 43 Challenge: Start Coding! 🚀
//Question 127: Convert a traditional function expression to an arrow function.
Object.defineProperty(exports, "__esModule", { value: true });
////  Traditional function expression
const traditionalFunction = function (a, b) {
    return a + b;
};
// Converted to arrow function
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(5, 3)); // Outputs: 8
console.log(arrowFunction(5, 3)); // Outputs: 8
