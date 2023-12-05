// node 03-Basics/01_functions.js

function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
} 

// sayMyName()

// function addTwoNumbers(Number1, Number2){
// console.log(Number1 + Number2);
// }

function addTwoNumbers(Number1,Number2){

    // let result = Number1 + Number2
    // return result
    return Number1 + Number2
}

const result = addTwoNumbers(9,5)
// console.log(result);

function loginUserMessage(username = "Nkk"){
    if(!username){
        console.log("Please enter a valid username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Nikhil"));

function calculateCartPrice( val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(2,500,300,500));

const user = {
    username: "nikhil" ,
    price: 199
}

function handdleObject(Anyobject){
    console.log(`Username is ${Anyobject.username} and price is ${Anyobject.price}`);
}

// handdleObject(user) 
handdleObject({
    username: "shivam" ,
    price: 599
})

const myNewArray = [100, 200, 300, 500]

function returnSecondValue(getArray){
 return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([999,888,777,666]));