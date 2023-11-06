function handleInput(value){
    const a=Number(document.getElementById("num1").value);
    const b=Number(document.getElementById("num2").value);
    if(value=='sum'){ 
        const result=arrayOp(a,b,value);
        document.getElementById("result").textContent=result;
    }
    else{
        const result=arrayOp(a,b,value);
        document.getElementById("result").textContent=result;
    }
    
}

arrayOp(a,b,value){
    return value(a,b);
}

sum(a,b){
    return a+b;
}

diff(a,b){
    return a-b;
}
