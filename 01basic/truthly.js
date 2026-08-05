const useremail = []

if(useremail){
    console.log("got user email");
}else {
    console.log("Don't have user email");
}

//  falsy values
// false, 0, -0 ,BigInt 0n, "" , null , undefined , NaN

// Truthy values
// "0", 'false', " ", [], {},function(){},

// if(useremail.length === 0){
//     console.log("Array is empty");
// }


const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}


// Nullish coallescing operator (??): null undefined

let var1; 
// vall = 5 ?? 10
// vall = undefined ?? 
// var1 = undefined ?? 15
var1 =null ?? 10?? 20



console.log(var1);

// Terniary operator

// condition ? true : false

const iceteatprice = 100
iceteatprice >=  80  ? 
console.log("less than 80"): 
console.log("More than 80")