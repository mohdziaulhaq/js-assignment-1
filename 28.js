//28. Use for loop to iterate from 0 to 100 and print only prime numbers

let a=1, b=100;

for(let i=a; i<=b; i++){
    if(checkPrime(i)){
        console.log(i);
    }
}

function checkPrime(num){
    if(num<2){
        return false;
    }else{
        let x = num/2;
        for(let i=2; i<x+1; i++){
            if(num%i==0){
                return false;
            }
        }
    }
    return true;
}