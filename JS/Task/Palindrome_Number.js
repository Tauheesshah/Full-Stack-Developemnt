let num=121
console.log(typeof num);

let str = num + "";
console.log(typeof str)

let rev=""
for(let i= str.length-1;i>=0;i--){
    rev+=str[i] 
}
console.log(typeof num,typeof rev)
 if (rev===str){
    console.log(num,"palindrome")
}
else{
    console.log(num,"not palindrome")
}         


