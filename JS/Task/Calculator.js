let number1=+process.argv[2]
let number2=+process.argv[3]
let operator=process.argv[4]

// console.log( typeof number1);

function cal(num1,num2,operator){

  

    switch(operator){
        case "+" :
           return console.log(num1+num2);
        case "-" :
           return console.log(num1-num2);
        case "/" :
           return console.log(num1/num2)
        case "%" :
            return console.log(num1%num2)
        case "*" :
           return console.log(num1*num2)
        default :
           return console.log("Invalid Expression")  
    }
}
cal(number1,number2,operator)