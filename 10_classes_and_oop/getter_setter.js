class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}nkk`
    }

    set password(value){
        this._password = value
    }
}

const nikhil = new User("nk@.ai" , "abc")
console.log(nikhil.password);