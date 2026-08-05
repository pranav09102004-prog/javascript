// Immediately Ivoked Function expressions 

(function chai(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTION TWO ${name}`);
})('Pranav')