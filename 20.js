// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

const prompt = require('prompt-sync')();

let marks = prompt('Enter your marks');

if(marks>=80 && marks<=100){
    console.log("Your grade is A");
}else if(marks>=70 && marks<=89){
    console.log("Your grade is B");
}
if(marks>=60 && marks<=69){
    console.log("Your grade is C");
}
if(marks>=50 && marks<=59){
    console.log("Your grade is D");
}
if(marks>=0 && marks<=49){
    console.log("Your grade is F");
}