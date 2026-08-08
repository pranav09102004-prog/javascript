function User(email, password){
    this._email = email;
    this._password = password 

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this.email = value
        }
    })
}

const Pranav = new User("pranav@ie", "0121")
console.log(Pranav.email);
