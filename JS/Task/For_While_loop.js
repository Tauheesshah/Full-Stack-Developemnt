// print the number from 1to 10

// for (i=1;i<=10;i++){
//     console.log(i)
// }

// i=1
// while(i<=10){
//     console.log(i)
//     i++
// }



//Print all even number

// let num=50
// for(i=1;i<=num;i++){
//     if(i%2==0){
//         console.log(i,"Even numbers")
//     }
//     else{
//         console.log(i,"Odd numbers")
//     }
// }

// i=1
// while(i<=50){
//     if(i%2==0){
//         console.log(i,"Even numbers")
//     }
//     else{
//         console.log(i,"Odd numbers")
//     }
//     i++
// }

// print the multiplication table of 5
// let num=10
// for (i=1;i<=num;i++){
//     console.log(i*5)
// }


//print 1 to 100 in the reverse order
// let num=1
// for (i=100;i>=num;i--){
//     console.log(i)
// }

//print the quuare of first 10 natural number
// let num=10
// for (i=1;i<=num;i++){
//     console.log(i*i)
// }


//print the Cube of first 10 natural number
// let num=10
// for (i=1;i<=num;i++){
//     console.log(i*i*i)
// }


//Reverse the number 123  -> 321 

// let num=123
// let value=num+""
// console.log(value)
// let jhola=''
// for (let i=value.length-1;i>=0;i--){
//     jhola += value[i]
// }
// jhola=Number(jhola)  or jhola=+jhola
// console.log(jhola)



let num2=432
num2=num2 + ''
let sum1=0
for(let i=0; i < num2.length;i++){
    sum1 += +num2[i]
}
console.log(sum1)
