// node 01-Basics/05_strings.js

const name  = "nikhil"
const repocount = 5

// console.log(name + repocount + "Value"); 

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('nikhil-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne.trim());

const url = "https://nikhil.com/nikhil%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-')); // return type Object