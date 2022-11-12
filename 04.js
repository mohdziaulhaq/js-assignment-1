//4. Check if the string contains a word Script using includes() method.

let mystring = "Peter parker is Spider man";

let fun = (word) =>{
    if(mystring.includes(word))
        console.log("Word is present");
    else
        console.log("Word is not present");   
}

fun("Spider");
fun("Iron");