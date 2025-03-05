/* Primitive Datatypes - Primitive type of data is call by value

There are 7 types of data
1.String
2.Number
3.Boolean
4.Null
5.Undefined
6.Symbol
7.BigInt


Non-Primitive Datatypes - Non-Primitive type of data is call by reference

there are 3 types of data
1.Array
2.Objects
3.Functions

*/

const id = 1;
const characte = "string";
const tempValue = null;
let age;
const updatedLogin = true;
console.log(id);
console.log(characte);
console.log(tempValue);
console.log(age);
console.log(updatedLogin);

const idd = Symbol('123');
const diffid = Symbol('123');
console.log(idd);
console.log(diffid);
console.log(idd === diffid);

const bigNumber = 121213632323n;
console.log(typeof bigNumber);


const jamurry = ["deepli","supli","Nurli"];
const murry {
   iddd=5,
   name="chabi",
}
const Myfunction = function(){
    console.log("Hello World");
}