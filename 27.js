// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

let min;
let max;
function taskOne(ages){
    
    console.log(`Sorted array : ${ages.sort()}`);
    max = ages.sort().splice(ages.length-1,1);
    min = ages.sort().splice(0,1);

    console.log("Max : "+max);
    console.log("Min : "+min);
}



function taskTwo(ages){
    if(ages2.length%2 == 0){
        console.log("The median is : "+(ages2[ages2.length/2] + ages2[(ages2.length/2)-1])/2);
    }else{
        console.log("The median is : "+ages2[ages2.length/2]);;
    }
}

function taskThree(ages){
    let sum = 0;
    for(let val of ages){
        sum = sum + val;
    }
    console.log("The avg of all ages is : "+sum/ages.length);
    return sum/ages.length;
}

function taskFOur(a,b){
    console.log("The range of all ages"+(a-b));
}

function taskFive(avg,max,min){

    console.log(avg+" "+max+" "+min);
    console.log("Difference between Minimum and Average age : "+ Math.abs(min - avg).toFixed(2));
    console.log("Difference between Maximum and Average age : "+ Math.abs(max - avg).toFixed(2));
}

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
taskOne(ages);

console.log("Max out "+max);

const ages2 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
taskTwo(ages2);
let avg = taskThree(ages2);
taskFOur(max,min);
taskFive(avg,max,min);

