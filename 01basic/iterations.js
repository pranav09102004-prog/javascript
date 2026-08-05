// for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element ==5){
        // console.log("5 is better than number");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value:${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner oop value:${j} and inner loop ${i}`);
        // console.log(i + '*' + j +'=' + i*j);
    }
    
}


let myArray = ["flash","batsman","superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// break and continue

for (let i = 1; i <= 20; i++){
    if(i == 19){
        console.log(`Detect 5`);
        break 
    }
    console.log(`value of i is ${i}`);
   
}

