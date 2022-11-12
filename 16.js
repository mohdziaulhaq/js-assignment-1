//16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let prompt = require('prompt-sync')();
let radius = prompt('Enter radius');

let pi = 3.14;
console.log(`Area of circle is ${pi*radius*radius} \nCircumference of circle is ${2*pi*radius}`);

