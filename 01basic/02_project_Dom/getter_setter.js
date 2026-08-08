class User {
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
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const pranav = new User("pranav@gmail.com", "0173")
console.log(pranav.password);
console.log(pranav.email);

