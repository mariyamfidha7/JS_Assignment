//Async await 
// async function myFunction(parameter1,parameter2){
    
// }

// const myFunction = async(p1,p2)=>{
    
// }

// async function fn(){
//     console.log('Async');
//     return 1;
// }

// fn().then(v1).then(v2).catch(handleError)


//
// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('Promise resolved')
//     },4000);
// });

// async function asyncFunc(){
//     let result=await promise;
//     console.log(result);
//     console.log('hello');
    
// }

// asyncFunc();

// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('Promise resolved')
//     },4000);
// });

// async function asyncFunc(){
//     try{
//         let result=await promise;
//         console.log(result);
//     }
//     catch(error){
//         console.log('hello');
//     }
    
    
// }

// asyncFunc();

//
// console.log("before funtions");
 
// let promise = new Promise(
//     (resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("promise resolved");
//         },4000
//     )
//     }
// );
 
// const getFunction =async ()=>{
//     try{
//         let getResult = await promise;
//         console.log(getResult);
//         console.log("promise is fulfilled")
//     }
//     catch(e){
//         console.log("error");
//     }
   
// }
 
// getFunction();
 
// console.log("outside async printing");
// console.log("outside async printing 1");

//

const getData = async ()=>{
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
            throw new Error(`data not fetched with response status ${response.status}`);
        }
            console.log(response);
            let data =await response.json();
            console.log(data);
       
    }
    catch(e){
        console.error(e);
    }
}
 
getData();
