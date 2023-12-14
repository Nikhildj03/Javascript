//node 09-advance/promises.js

const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // DB calls, cryptogry, network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve
    },1000)    // Promise  created
}) 
  // Promise consumed
promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve
    },1000)
}).then(function(){
    console.log("Asyncs 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
      let error = true
      if(!error){
        resolve({username: "Nikhil" , email: "Nikhil.com"})
      } else(
        reject('ERROR : Something went wrong')
      )
    },1000)
})

promiseFour
.then((user)=> {
    console.log(user);
    return user.username
})
.then((username)=> {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "Javascript", Password: "123"})
        }else{
            reject('ERROR: JS went Wrong')
        }
    })
})

async function consumePromiseFive(){
    try{
        const respone = await promiseFive
        console.log(respone);
    } catch (error){
        console.log(error);
    }
}


consumePromiseFive()

async function getAllUsers(){
    try{
        const respone = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await respone.json()
        console.log(data);
    }catch(error){
        console.log("E:" , error);
    }
}

getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((respone)=>{
    return respone.json()
})
.then((data)=> {
    console.log(data);
})
.catch((error)=> console.log(error))

// promiseFive.all
