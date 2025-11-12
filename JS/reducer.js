
let str=["mango","apple","kiwi","Watermelon","mango","kiwi","apple","kiwi","banana","lichi","muskmelon"]

let data=str.reduce((acc,curr)=>{
    console.log(curr)
    acc[curr]=(acc[curr]||0)+1
    return acc
},{});
console.log(data)

//with reducer
let arr=[2,7,0,3,1,6,4,8];
let data1=arr.reduce((acc,curr)=>{
    //  curr=curr+2
    return[...acc ,curr+2]
},[]);
console.log(data1)


//