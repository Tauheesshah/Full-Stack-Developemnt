let str="Tauheed";
let arr=Array.from(str,(_,x)=>x+1);
console.log(arr)

let shallowCopy=arr.slice(3,6)
console.log(shallowCopy);

arr.push(8,9,10)
console.log(arr)

arr.pop()
console.log(arr)

arr.splice(3,1,10)
console.log(arr)


