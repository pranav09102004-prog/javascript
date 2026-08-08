const descripter = Object.getOwnPropertyDescriptor(Math,
    "PI")

console.log(descripter);


// const mynewObject = Object.create(null)

const code = {
    name: 'Pranav',
    Age: '22',
    isAvailable: true,

    ordercode: function(){
        console.log("Does not support");
        
    } 
}

console.log(Object.getOwnPropertyDescriptor(code, "name","Age", "isAvailable"));


Object.defineProperty(code, "name", {
    // writable: false,
    enumerable: true

})

// console.log(Object.getOwnPropertyDescriptor(code,"name"));

for(let [key, value] of Object.entries(code)){
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);

    }
}