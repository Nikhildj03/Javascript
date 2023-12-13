// node 05-Iterations/three.js
// for of

// [ " " , " " , " "]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //  console.log(num);
}

const greetings = "Hello world!"
for (const Greet of greetings) {
    // console.log(Greet);
}

// Maps 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")

// for (const map of map) {
//     console.log(map);
// } it will not work

for(const [key , value]of map){
    // console.log(key , ':-' , value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key , value] of myObject) {
//     console.log(key , ':-' , value);
// }   in for of loop for obj we not use for of 