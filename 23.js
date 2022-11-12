// 23. Write a program which tells the number of days in a month, now consider leap year.

for(let i=0; i<12; i++){
    console.log(`Mumber of days in month ${i} is ${(new Date(2008,i+1,0)).getDate()}`);
}