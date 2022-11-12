let arr = ["Zia",3,true,"KBC",-1,-1,888];

let temp;
let count=0;
for(let i=0; i<arr.length && count<=1; i++){
    count=0;
    temp = arr[i];
    arr.forEach(e=>{
        if(e===temp){
            count++;
        }
    });
}

if(count==1){
    console.log("All the given items in the array are unique");
}else{
    console.log("All the given items in the array are not unique");
}