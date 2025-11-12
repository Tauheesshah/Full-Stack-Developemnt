let number="hellooo"
let newArr=Array.from(number,(_,i)=>i+1)
console.log(newArr);

let data = newArr.map((element,index,array)=>element<5?array[index]:null)
console.log(data)

let str=["Mango","apple","Kiwi","Watermelon","mango","apple","kiwi","banana","lichi","muskmelon"]

let data1 = str.filter((element,index,array)=>index!=0)
console.log(data1)

let data3=str.forEach((el,i,arr) => {
    el==="apple"?console.log(el,i):null
});

// in all the hof if we use { } then we have to write the word return orelse we can use => act same

