// Write the codes in here

// Using var (function-scoped, can be redeclared and reassigned)
var message = "Hello, world!";
console.log(message);
message = "Hello, JavaScript!";
console.log(message);

// Using let (block-scoped, can be redeclared but not reassigned)
let greeting = "Hello, world!";
console.log(greeting);
greeting = "Hello, JavaScript!";
console.log(greeting);

// Using const (block-scoped, cannot be redeclared and reassigned)
const pi = 3.14159;
console.log(pi);

// Uncommenting the next line will cause an error because const variables cannot be reassigned
// pi = 3.14;

// Demonstrating block scoping
if (true) {
    var varScoped = "I am var scoped";
    let letScoped = "I am let scoped";
    console.log(letScoped); // Accessible here
}

console.log(varScoped); // Accessible here because var is function-scoped
// console.log(letScoped); // This would cause an error because let is block-scoped


// Basic Arithmetic Operations
let a = 10;
let b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Basic Logical Operations
let x = true;
let y = false;
console.log("AND:", x && y);
console.log("OR:", x || y);
console.log("NOT x:", !x);
console.log("NOT y:", !y);

// Type Conversion
let num = 42;
let numToStr = String(num);
console.log("Number to String:", numToStr, "(Type:", typeof numToStr, ")");

let str = "123";
let strToNum = Number(str);
console.log("String to Number:", strToNum, "(Type:", typeof strToNum, ")");