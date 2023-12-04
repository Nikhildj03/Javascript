//  Primitive

// 7 types  : String , Number , Boolean , BigInt, null undefined , symbol 

let userEmail = "ikhil@gmail.com"
let score = 100
let isLoggedIn = false
let outSideTemp = null
let username;

const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id === anotherid);

// const bigNumber = 1212131222211n;

// Refrences (Non primitives)

// Array , Objects , Funstions

const hero = [ "Superman" , "Batman" , "Krish"];

let myObj = {
    name: 'Nikhil' ,
    age: 23,
}

const myFunction = function(){
    console.log("Hello World")
}

//   primitive  

console.log(typeof userEmail  );
console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof outSideTemp);
console.log(typeof username);
console.log(typeof id);

// Non-primitive

console.log( typeof hero);   // Object
console.log( typeof myFunction);  // Function 
console.log(typeof myObj );      // object

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object