// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const prompt = require('prompt-sync')();

let age = Number(prompt("Enter your age:"));

if(age > 18){
    console.log('You are old enough to drive');
}else{
    console.log(`You need to age more ${18-age} years to turn 18`);
}