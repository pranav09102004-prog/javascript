function SetUsername(username){
    this.username = username
    console.log("Called");
    
}

function createUser(username, email, password){
    SetUsername(username)

    // this.username = username

    this.email = email
    this.password = password
}

const chai = new createUser("pranav", "pranav@gamil.com", "12345");
console.log(chai);
