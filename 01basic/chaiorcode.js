function one() {
    console.log("One")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("threee") 
}

one()
two()
three()