// node 05-Iterations/four.js
// for in loop
const myObject = {
    js: "Javascript",
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
//    console.log(programming[key]);
}

// const map = new Map()  //obj

// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('Fr',"France")

// for (const key in map) {
//      console.log(key);
// }