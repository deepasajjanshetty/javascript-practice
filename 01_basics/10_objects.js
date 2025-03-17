// objects will define two types 1 literal 2 constructor


//singleton

//object literals

const mySym = Symbol("key1")
const JsUser = {
   name: "Deepu",
   age: 26,
   [mySym]: "myKey1",
   location: "mumbai",
   email: "deepa@testemail.com",
   isLoggedIn: false,
   lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}
console.log(JsUser.email)
console.log(JsUser[mySym])

JsUser.email = "deepu@testme.com"
//Object.freeze(JsUser)
JsUser.email = "deepu@testwwwme.com"
console.log(JsUser.email)
console.log(JsUser)


//+++++++++++functions++++++++++++++++++++++++++

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hellos JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

const tinderUser = new Object();
console.log(tinderUser);

const flexCode = {}
flexCode.id = "123"
flexCode.name = "Deepu"
flexCode.isLoggedIn = false

console.log(flexCode);


const regularUser = {
    email: "deepu@testdee.com",
    fullname: {
        userfullname:{
            firstname: "Deepu",
            lastname: "Shetty"
        }
    }

}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {2: "d", 3: "c", 4: "d"}
const obj3 = {obj1, obj2}
console.log(obj3);
const obj4 = Object.assign(obj1, obj2);
console.log(obj4);
console.log(obj3 === obj2);


