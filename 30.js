// 30. Write a script which generates a random hexadecimal number.
let hex ='0123456789ABCDEF';
let output='';
for(let i=0; i<hex.length;i++)
output += hex.charAt(Math.floor(Math.random()*hex.length));
console.log(output);

