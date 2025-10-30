let arr = [1,2,3,4,5];
let arr2 =[6,7,8,9,10];

let final_arr = [...arr,...arr2]
console.log("Final Array :", final_arr);  //Spread Operator 


const sum=(a,...args)=>{
    console.log("a:",a);
    console.log("args:",args);   //Rest Operator
}
sum(2,7,9)