const user = {
    username: "nikhil",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// this Keyword refers to  current context

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// function chai(){
//     let username = "nikhil"
//     console.log(this.username);
// }

// In function this Keyword cannot used it can be use only in object

// This Keyword  is not used in Arroy function .

// const chai = function(){
//     let username = "nikhil"
//     console.log(this);
// }

// +++++++++++++++ Arrow Function +++++++++++++++++++++

const chai = () =>{
    let username = "nikhil"
    console.log(this);
}

// const addTwo = (num1 , num2) =>{
//   return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2) 

const addTwo = (num1 , num2) => ({username: "nikhil"}) // Return Object 

console.log(addTwo(3,4))

const myArray = [1 , 5 , 6 ,7]

// myArray.forEach()

