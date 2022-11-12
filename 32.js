// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array

const countryList = require("./24-countries");


function fun1(){
    let result = [];
    for(let val of countryList){
        if(val.includes("land"))
        result.push(val);
    }
    return result;
}

function fun2(){
    let resultCountry = countryList[0]; 
    for(let val of countryList){
        if(val.length > resultCountry.length )
        resultCountry = val;
    }
    return resultCountry;
}

function fun3(){
    let result = [];
    for(let val of countryList){
        if(val.length==4)
        result.push(val);
    }
    return result;
}

function fun4(){
    let result = [];
    for(let val of countryList){
        if(val.includes(' ')){
            result.push(val);
        }
    }
    return result;
}

function fun5(){
    let result = [];
    for(let val of countryList.reverse()){
        result.push(val.toUpperCase())
    }
    return result;
}

let result1 = fun1();
console.log("All the countries contain the word 'land' from the countrieslist are : "+result1);

let result2 = fun2();
console.log("\nThe country with highest number of characters is : "+result2);

let result3 = fun3();
console.log("\nCountries containing only four characters from the countries array are :"+result3);

let result4 = fun4();
console.log("\nCountries containing two or more mords from the countries array are :"+result4);

let result5 = fun5();
console.log("\nUppercase and reversed countries list :"+result5);
