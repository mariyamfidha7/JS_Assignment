// const numbers = [-2,12,-3,34];
// const result = numbers.filter(getPositive);
// console.log(result);

// function getPositive(number){
//     return number>=0;
// }

// function num(numbers,getPositive){
//     const result = numbers.filter(getPositive);
//     console.log(result);

// }

// const numbers = [-4,8,-12,3];



// const getNum = check(numbers,callback){
//     callback(numbers);
// }

function arrayOp(arr,callback){
    const result = arr.filter(callback);
    return result;
}

function isPositive(number){
    return number >=0;
}


const numbers = [-4,8,-12,3];
const filteredNumbers = arrayOp(numbers, isPositive);
console.log(filteredNumbers);