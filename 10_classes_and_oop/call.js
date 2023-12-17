function SetUserName(username){
    // Complex DB Calls
  this.username = username;
  console.log(`Called`);
}

function createUser(username , email , password){
    
 SetUserName.call(this, username)

    this.email = email;
    this.password = password
}

const nkk = new createUser("Nikhil" , "Nikhil.fb.com",123)
console.log(nkk);