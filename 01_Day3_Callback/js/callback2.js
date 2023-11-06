setTimeout(() => { myFunction("Hello");},3000);  //arrow function
function myFunction(value) {
    document.getElementById('demo').innerHTML=value;
}

