const marvel_heros = ["thor" , "Ironman" , "Spiderman"]
const dc_heros = ["superman" , "Flash" , "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);  //[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'Flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) 
// console.log(allHeros);  
// Concate give the output in new array

const all_new_heros = [...marvel_heros, ...dc_heros]  

// console.log(all_new_heros); 

const another_array = [1 , 2 , 3 , [4 , 5 , 6] , 6 , 7 [8 ,9 , [10 , 11] , 13 ,14]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



console.log(Array.isArray("Nikhil"));
console.log(Array.from("Nikhil"));
console.log(Array.from({name: "Nikhil"}));  // interesting we have to define whether to target the key or Value.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));