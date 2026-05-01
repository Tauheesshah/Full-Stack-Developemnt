const { sum, sub, mul, div, expo } = require('./index');

const num1 = +process.argv[2];
const num2 = +process.argv[3];
const operator = process.argv[4];

switch(operator){
    case '+':
        console.log(sum(num1, num2));
        break;
    case '-':
        console.log(sub(num1, num2));
        break;
    case '*':
        console.log(mul(num1, num2));
        break;
    case '/':
        console.log(div(num1, num2));
        break;
    case '**':
        console.log(expo(num1, num2));
        break;
    default:
        console.log("Please enter a valid operator");
}