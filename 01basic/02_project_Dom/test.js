const myArr = []
 console.log(myArr)


//  continious, Holey

// SMI(small integer)
// Packed
// Double(float, string, function)


const arrTwo = [1,2,3,4,5]
// PACKED_DOUBLE_ELEMENTS


arrTwo.push(6.0)
// PACKED_ELEMENTS

arrTwo.push('7')

arrTwo[10] = 11

// HOLLY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

//bounnd check 
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);
