//13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
const prompt = require('prompt-sync')();

let base = prompt("Enter base");
let height = prompt("Enter height");


let area = (0.5 * base * height);

console.log(`The area of triangle is ${0.5 * base * height}`);
