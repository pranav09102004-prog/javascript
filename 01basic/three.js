const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

// A greeting is just a way to say hello to someone.It’s the first thing we say when we meet or start talking. 

const greetings = "Hello world !"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps - Map is a key structure that stores a key-value pairs.

const map = new Map ()
map.set('IN',"India")
map.set('USA' , "United states of america")


console.log(map);

for( const [key,value] of map){
    console.log(key,':', value);
}