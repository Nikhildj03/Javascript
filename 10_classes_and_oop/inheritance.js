class User{
    constructor(Username){
        this.Username = Username
    }

    logMe(){
        console.log(`USERNAME is ${this.Username}`);
    }
}

class Teacher extends User{
    constructor(Username , email, password){
   super(Username)
   this.email = email;
   this.password = password
    }

    addCourse(){
    console.log(`A new course was added by ${this.Username}`);
    }
}

const chai = new Teacher("chai" , "chai@fb.com" , 123);

chai.logMe();

const masalaChai = new User("masalaChai")

console.log(chai instanceof User); 