let myDate = new Date();
console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025 , 0 , 25);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
let myCreateddDate = new Date(2025 , 0 , 25,5,6);
console.log(myCreateddDate.toLocaleString());
let myCreatedddDate = new Date("2025-01-14")
console.log(myCreatedddDate.toLocaleString());


//++++++++++++++++timeStamp+++++++++++++++
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedddDate.getTime());
console.log(Math.round(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})