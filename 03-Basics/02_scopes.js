var c = 300 
  
// Global scope


let a = 300 
if (true) {   // Block scope
    let a = 10
    let b = 20
    console.log("Inner: " , a);
}


// What ever is present in Global scope it  can be  accept by block scope  but what ever is present in the block scope it cannot access by  the global scope.


// console.log(a);
// console.log(b);
// console.log(c);


//  Icecream Ex ==>  chota bacha bate bachese icecream mag sagta hai lekin bada bacha chotte bachse icecream nahi magsakta 
function one(){
    const username = "nikhil"

    function two(){
        const website= "youtube"
        console.log(username)
     }
//    console.log(website)
     two()
}

// one()

if(true){
    const username = "nikhil"
    if (username === "nikhil"){
        const website = "youtube"
        console.log(username + website);
     }
    //  console.log(website); 
}

// console.log(username);


// +++++++++++++++++++Intereseting+++++++++++++++++++++++


console.log(addone(5));

function addone(num) {
    return num + 1
}

addTwo(5)    //Error
const addTwo = function(num){
    return num + 2
}
