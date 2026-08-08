const user = {
    username: "Pranav",
    logincount: 5,
    signedin: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(`Login count: ${this.logincount}`);
        // console.log(`Signed in: ${this.signedin}`);
        console.log(this);
    }
}

// console.log(user.username);
// user.getUserDetails();

// const date = new Date() : New - Used to create a new context; this is called a constructor
function User(username, logincount, signedin) {
    this.username = username;
    this.logincount = logincount;
    this.signedin = signedin;
    }

const userOne = new User("Pranav", 12, true);
const userTwo = new User("Mali", 11, true);
console.log(userOne);
console.log(userTwo);



