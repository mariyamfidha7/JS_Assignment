export const myNumbers = [1,2,3,4];
const animals = ['Panda','Bear','Eagle'];

export function myLogger(){
    console.log(myNumbers,animals);
}

export default function petsLogger(pets){
    console.log(pets);
}

export {myNumbers,myLogger as Logger}