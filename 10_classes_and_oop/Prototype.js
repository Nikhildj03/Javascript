// let myName  = 'Nikhil'
// let myName  = 'Nikhil      '

// console.log(myName.length);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

// console.log(heroPower.getSpiderPower());

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all object`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}


// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport{
    isAvaiable = false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiaurCode     "

String.prototype.trueLength = function(){
    console.log(${this});
    console.log(`True length is: ${this.trim().length}`);
} 
anotherUsername.trueLength()
"hitesh".trueLength()
"Chai".trueLength()