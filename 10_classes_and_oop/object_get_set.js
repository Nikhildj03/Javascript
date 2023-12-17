const User = {
    _email: "chai@ai",
    _password: 123,

  get email(){
    return this._email.toLowerCase()
  },

  set email(value){
   this._email = value
  },
  get password(){
    return this._password.toLowerCase()
  },

  set password(value){
   this._password = value
  },


}

const tea = Object.create(User)
console.log(tea.email);