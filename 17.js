// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let now = new Date();

let myYear = now.getFullYear();
let myMonth = now.getMonth();
let myDate = now.getDate();

let myHour = now.getHours();
let myMinutes = now.getMinutes();

console.log(`Time in YYYY-MM-DD HH:mm is ${myYear}-${myMonth}-${myDate} ${myHour}:${myMinutes}`);
console.log(`Time in YYYY-MM-DD HH:mm is ${myDate}-${myMonth}-${myYear} ${myHour}:${myMinutes}`);
console.log(`Time in YYYY-MM-DD HH:mm is ${myDate}/${myMonth}/${myYear} ${myHour}:${myMinutes}`);