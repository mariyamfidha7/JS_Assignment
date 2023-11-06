function greet(name,callback) {
    console.log('Hi'+' '+name);
    callback();
}
function alpha(){
    console.log("I am alpha function");
}
function beta(){
    console.log("I am beta function");
}

greet('Peter',alpha);
greet('John',beta);