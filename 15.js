// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

// For y=mx+c :
// Slope = m
// x-intercept = -c/m
// y-intercept = c

let expression = "y=2x-c";

let arr = expression.split('');

let m = Number(arr[2]);
let c = Number(arr[4]+arr[5]);

console.log(`Slope is ${m} \n x-intercept is ${-c/m} \n y-intercept is ${c}`);     
