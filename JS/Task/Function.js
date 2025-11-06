// Write a function that checks if a number is even or odd.
let number=21
function num(){
    if (number % 2==0){
        console.log("Even number")
    }
    else{
        console.log("Odd Number")
    }
}
num()



//Create a function that takes a string and returns its length without using .length functions
// 1️⃣ Function to find length of a string without using .length
function getLength(str) {
    let count = 0;
    for (let i of str) {
        count++;
    }
    return count;
}
console.log("1️⃣ Length of string:", getLength("Hello World"));


// 2️⃣ Function to find factorial of a number
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
console.log("2️⃣ Factorial of 5:", factorial(5));


// 3️⃣ Function to reverse a string
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log("3️⃣ Reversed string:", reverseString("hello"));


// 4️⃣ Function to count vowels in a string
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let ch of str) {
        if (vowels.includes(ch)) count++;
    }
    return count;
}
console.log("4️⃣ Number of vowels:", countVowels("Education"));


// 5️⃣ Function to return the larger of two numbers
function largerNumber(a, b) {
    return a > b ? a : b;
}
console.log("5️⃣ Larger number:", largerNumber(10, 25));


// 6️⃣ Function to return the sum of all numbers in an array
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log("6️⃣ Sum of array:", sumArray([10, 20, 30, 40]));


// 7️⃣ Function to check if a string is a palindrome
function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}
console.log("7️⃣ Is 'madam' palindrome?:", isPalindrome("madam"));
console.log("7️⃣ Is 'hello' palindrome?:", isPalindrome("hello"));


// 8️⃣ Function to capitalize the first letter of each word
function capitalizeWords(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
console.log("8️⃣ Capitalized string:", capitalizeWords("hello world from javascript"));




// Intermediate Function Practice


