const myArr = [0, 1, 2, 3, 4, 5]
const myArr1 = [0, 1, 2, 3, 4, 5, true, "Deepu"]
console.log(myArr1)
const myArray = ["deepu", "pooju", "subu", "harshu"]
const arr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array Methods

myArr.push(6,7) // add new values in the array
myArr.pop() // last value removed from array
myArr.unshift(9) // its added value front in element
myArr.shift() // its removed value front in the element 
console.log(myArr.includes(9));
console.log(myArr.indexOf(3)); // its showing because its existing in array
console.log(myArr.indexOf(9)); // its showing -1 because its not exisiting in array
console.log(myArr);

const myArr2 = myArr.join() //its convert type its showing string
console.log(myArr);
console.log(myArr2);
console.log(typeof myArr2);


// slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3) // starting from index 1 to 2 last range is not taken
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)// starting from index 1 to 3 last range also take and its take from orignial array and added here 
console.log("C", myArr); // removed array list element if i take splice
console.log(myn2);

const thinks = ["car", "carrom", "socket", "engine", "bulb", "regulator"]
const product = ["Choclate", "cream", "pasta"]
//thinks.push(product)
//console.log(thinks)

const allProducts = thinks.concat(product)
console.log(allProducts)


const all_new_product = [...thinks, ...product]  // spread operator
console.log(all_new_product)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_anotherArray = anotherArray.flat(Infinity)
console.log(real_anotherArray)

console.log(Array.isArray("Deepu"))
console.log(Array.from("Deepu"))
console.log(Array.from({name: "Deepa"})) // it will give you blank array you have to tell that u have to create by keys

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));