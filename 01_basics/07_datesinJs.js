// date 

let myDate = new Date()
// console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());


let myCreatedDate = new Date(2025 , 1 , 28 )
// console.log(myCreatedDate.toDateString())

let myCreatedDateTime = new Date(2025 , 1 , 28 , 8 , 30)
// console.log(myCreatedDateTime.toLocaleString())

let myDateTime = new Date("2026-02-28")
// console.log(myDateTime.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myDateTime.getTime());

// converting to seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());