// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com" ,
    fullname: { 
        userfullname: {
    firstname: "nikhil",
    lastname: "kakade"
    }
}
}
 
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a" , 2: "b"}
const obj2 = { 3: "c" , 4: "d"}
const obj3 = { 5: "e" , 6: "f"}

// const obj4 = { obj1 , obj2 , obj3} 
// const obj4 = Object.assign({} , obj1 , obj2 , obj3)  // {} => Target and Rest is  Source


// by using Spread Operator

const obj4 = {...obj1, ...obj2, ...obj3, }
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "n@gmail.com"
    }, 
    {
        id: 1,
        email: "n@gmail.com"
    }, 
    {
        id: 1,
        email: "n@gmail.com"
    }, 

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check whether the variable is present or not

//  Object de-Structure and JSON API 

const course = {
    coursename: "Js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}
// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);
   
// JSCON will look like This.
// { 
//     "name": "nikhil",
//     "course": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]