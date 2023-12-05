const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // It will add the o after . 

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000000000
// console.log(hundreds.toLocaleString('en-IN')); 

// ++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // It will convert the negative value into positive.

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,6,8,9));
// console.log(Math.max(10,50,60,0,1));


console.log(Math.random()); // the Value come between 0 to 1.
console.log((Math.random() * 10) + 1)
// console.log(Math.floor(Math.random() * 10) + 1) // Know the minimum value is 1 to 10.

const min = 1;
const max = 6;


console.log(Math.floor(Math.random() * (max - min)) + min )