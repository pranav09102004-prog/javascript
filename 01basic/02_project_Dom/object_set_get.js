const User = {
    _email: 'pranav@09.gmail',
    _password: 'abc',


    // Is used to look ata teh value
    get email(){
        return this._email.toLocaleLowerCase()
    },
    // Is used to change teh value
    set email(value){
        this._email = value
        
    }
}
const code = Object.create(User)
console.log(code.email);
