// Object - Object is a collection of key-value pairs

const myObject = {
    js: 'JavaScript',
    CPP:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["ja","rb","py","java","cpp"]

for(const key in programming){
    console.log(key);
       
}