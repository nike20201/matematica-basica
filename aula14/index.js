let num1 = 0.7;
let num2 = 0.1;

console.log(num1.toString() + num2); // "0.70.1" - concatenação de string

num1 = num2; // continua como número
console.log(num1.toString(2)); // mostra o número 0.1 em binário

console.log(num1.toFixed(2)); // "0.10" - duas casas decimais

console.log(Number.isInteger(num1)); // false - não é inteiro

let temp = num1 + 5; // soma normal: 0.1 + 5 = 5.1
console.log(Number.isNaN(temp)); // false - não é NaN

console.log(temp); // 5.1
