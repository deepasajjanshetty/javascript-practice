const name = "deepu"
const repoCount = 60
console.log(`my name is ${name} and my repo count is ${repoCount}`); // this is called string interpolation
const goIndigo = new String('deepu-uuuuu')
console.log(goIndigo[0]);
console.log(goIndigo.length);
console.log(goIndigo.toLowerCase()); // all character in upper case 
console.log(goIndigo.toUpperCase()); // all character in lower case 
console.log(goIndigo.charAt(4).toUpperCase(4));
console.log(goIndigo.indexOf('u'));
const newString = goIndigo.substring(0,9);
console.log(newString);
const oldString = goIndigo.slice(0,9);// you can add minus for reverse value
console.log(oldString);
const reverseString = goIndigo.slice(-3,9);
console.log(reverseString);
const newStringOne = "     deepa    "
console.log(newStringOne)
console.log(newStringOne.trim())
const url = "http://google.com/deepu%20shetty"
console.log(url.replace('%20',''))
console.log(url.includes('deepu'))