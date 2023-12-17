// Es 6 

// class User{
//  constructor(username , email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
//  }

//  encryptPassword(){
//     return`${this.password }@abc`
//  }

//  changeUsername(){
//   return `${this.username.toUpperCase()}`
//  }

// }

// const Nikhil = new User("Nikhil" , "Nikhil.fb.com" , 1111)

// console.log(Nikhil.changeUsername());
// console.log(Nikhil.encryptPassword());


// Behind the scene

function User(username , email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return`${this.password }@abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const Chai = new User("Chai", "username@gmail.com" , 1122)
console.log(Chai.encryptPassword());
console.log(Chai.changeUsername());