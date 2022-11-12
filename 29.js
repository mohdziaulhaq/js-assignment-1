//29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let a=1, b=100;
let evenSum = 0, oddSum = 0;
for(let i=a; i<=b; i++){
    if(i%2==0){
        evenSum = evenSum + i;
    }else{
        oddSum = oddSum + i;
    }
}
console.log("Sum of even numbers from 1 to 100 is "+evenSum);
console.log("Sum of odd numbers from 1 to 100 is "+oddSum);

