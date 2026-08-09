// Prototype - in java script every object has hidden property that is called prototype.

// let myname = "Pranav"
// let mychannel = "Maskcode"


// console.log(myname.trueLength());


let myHeros = ["Spierman", "Ironman"]
let heropower = {
    ironman: "Suite",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidey power is ${this.spiderman}`);
        
    }
}

Object.prototype.pranav = function(){
    console.log(`Pranav is present in all object `);
}

Array.prototype.heyPranav = function(){
    console.log("Pranav Is Hero");
}
// heropower.pranav()
// myHeros.pranav()
// myHeros.heyPranav()


const user = {
    name: "Pranav",
    email: "panav09@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const Teachingsupport = {
    isAvailable: false
}

const Tsupport = {
    makeAssignment: "JS Assignment",
    fulltime: true,
    __proto__: Teachingsupport
}

Teacher.__proto__ = user

// Modern Syntax

Object.setPrototypeOf(Teachingsupport, Teacher)

let anotherusername = "Maskcoding"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherusername.trueLength()