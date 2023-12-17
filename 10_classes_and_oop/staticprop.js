class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${thsi.username}`);
    }

    static createid(){
        return `123`
    }
}


const nikhil = new User("Nikhil")
// console.log(nikhil.createid());


class Teacher extends User(){
    constructor(username , email){
   super(username);
   this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone@gmail.com")
console.log(iphone.createid());