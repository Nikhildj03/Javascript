// Singleton 
// Object.create

// Object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Nikhil",
    "full name": "Nikhil Kakade",
     [mySym]: "mykey1",
     age: 23,
     location: "Mumbai",
     email: "nikhil@google.com",
     isLoggedIn: false,
     lastLogIn: ["Monday" , "Saturday"]
}

console.log(JsUser.name);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(JsUser["email"]);

JsUser.email = "nikhil#gpt.com"

// Object.freeze(JsUser)  It will lock the object 

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user , ${this["full name"]}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());