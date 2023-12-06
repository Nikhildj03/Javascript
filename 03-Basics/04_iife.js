// Immediately Invoked Function Expressions(IIFE)

// we use iife to remove the global scope pollution problem and to remove that we use iife.


(function chai (){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); 

((name) => {
 console.log(`DB Connected ${name}`);
})('nikhil')