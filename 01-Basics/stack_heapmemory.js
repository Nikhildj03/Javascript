//  Stack (Primitive) , Heap (Non-Primitive)

/*
  stack => In stack we get the copy of that variable.
  Heap  => In heap we get the refrence of that variable.
*/

let myLocation = "Mumbai";

let anotherLocation = myLocation
anotherLocation = "Pune";

console.log(anotherLocation);
console.log(myLocation);


let userOne = {
    email: "user1@gmail.com" ,
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "nikhil.com"

console.log(userOne.email);
console.log(userTwo.email);