class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    createId(){
        return `123`
    }
}

const Pranav = new User("Pranav")
// console.log(Pranav.createId());


class Teacher extends User {
     constructor(username, email){
        super(username)
        this.email = email
     }
}

const media = new Teacher("Photo", "media@gmail.com")
media.logMe();
console.log(media.createId());
