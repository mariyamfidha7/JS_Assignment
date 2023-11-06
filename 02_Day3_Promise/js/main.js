// const count=true;

// let countValue=new Promise((resolve,reject)=>{
//     if(count){
//         resolve("There is a count value");
//     }
//     else{
//         reject("There is no count value");
//     }
// });

// console.log(countValue);

//
// let countValue=new Promise((resolve,    )=>{
//     resolve("Promise resolved");
// });

// const v1=(res)=>{
//     console.log(res);
// }

// const v2=()=>{
//     console.log("You can call multiple functions this way");
// }

// countValue
//     .then(v1)
//     .then(v2);

//
// let countValue=new Promise((resolve,    )=>{
//     resolve("Promise resolved");
// });

// const v1=(res)=>{
//     console.log(res);
//     const newRes = res + " and new value";
//     return newRes;
// }

// const v2=(data)=>{
//     console.log(data);
//     console.log("You can call multiple functions this way");
// }

// countValue
//     .then(v1)
//     .then(v2);

//
// let countValue=new Promise((  ,reject)=>{
//     reject("Promise resolved");
// });

// const v1=(res)=>{
//     return new Promise((resolve, )=>{
//         console.log(res);
//         setTimeout
//     })
    
// }

// const v2=(data)=>{
//     console.log(data);
//     console.log("You can call multiple functions this way");
// }

// countValue
//     .then(v1)
//     .then(v2);

//finally

let countValue=new Promise(function(resolve, )=>{
    resolve("Promise resolved");
});

countValue.finally(
    function.greet(){
        console.log("This code is done");
    }
)
