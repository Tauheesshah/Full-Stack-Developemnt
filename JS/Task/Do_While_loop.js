// 1️⃣ Print numbers from 1 to 10
let i = 1;
console.log("1️⃣ Numbers from 1 to 10:");
do {
    console.log(i);
    i++;
} while (i <= 10);

console.log("----------------------");


// 2️⃣ Print all even numbers between 1 and 50
i = 1;
console.log("2️⃣ Even numbers between 1 and 50:");
do {
    if (i % 2 === 0) console.log(i);
    i++;
} while (i <= 50);

console.log("----------------------");


// 3️⃣ Print all odd numbers between 1 and 50
i = 1;
console.log("3️⃣ Odd numbers between 1 and 50:");
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 50);

console.log("----------------------");


// 4️⃣ Print the multiplication table of 5
i = 1;
console.log("4️⃣ Multiplication table of 5:");
do {
    console.log("5 x " + i + " = " + (5 * i));
    i++;
} while (i <= 10);

console.log("----------------------");


// 5️⃣ Print numbers from 100 down to 1
i = 100;
console.log("5️⃣ Numbers from 100 to 1:");
do {
    console.log(i);
    i--;
} while (i >= 1);

console.log("----------------------");


// 6️⃣ Print the sum of numbers from 1 to 100
i = 1;
let sum = 0;
console.log("6️⃣ Sum of numbers from 1 to 100:");
do {
    sum += i;
    i++;
} while (i <= 100);
console.log("Sum =", sum);

console.log("----------------------");


// 7️⃣ Print the square of the first 10 natural numbers
i = 1;
console.log("7️⃣ Squares of first 10 natural numbers:");
do {
    console.log(i + "² = " + (i * i));
    i++;
} while (i <= 10);

console.log("----------------------");


// 8️⃣ Print the cube of the first 10 natural numbers
i = 1;
console.log("8️⃣ Cubes of first 10 natural numbers:");
do {
    console.log(i + "³ = " + (i * i * i));
    i++;
} while (i <= 10);

console.log("----------------------");


// 9️⃣ Print the first 10 multiples of 3
i = 1;
console.log("9️⃣ First 10 multiples of 3:");
do {
    console.log("3 x " + i + " = " + (3 * i));
    i++;
} while (i <= 10);

console.log("----------------------");


// 🔟 Print the factorial of a given number
let num = 5;  // you can change this number
i = 1;
let fact = 1;
console.log("🔟 Factorial of", num, ":");
do {
    fact *= i;
    i++;
} while (i <= num);
console.log("Factorial =", fact);
