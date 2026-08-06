const mynums =[1,2,3]


// const mytotal =mynums.reduce(function (acc , currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);    
//     return acc + currval
// } , 3)



const mytotal = mynums.reduce( ( acc, curr) => acc + curr , 0)
console.log(mytotal);



const shoppingcard = [
    {
        itemname : "js course",
        price: 2999
    },
    {
        itemname : "PY course",
        price: 3999
    },
    {
        itemname : "rb course",
        price: 4999
    },
    {
        itemname : "HTML course",
        price: 5999
    }
]

const pricetopay = shoppingcard.reduce((acc, item) =>acc + item.price , 0 )
console.log(pricetopay);