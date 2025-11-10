let num1 = 9.95858 ; //cria uma variavel num1 com o valor de 9,95858
let num2 = Math.floor(num1); // variavel num2 recebe num1 e math.floor ira arrendondar o valor para baixo 
console.log(num2) // inprime 9



let num3 = 9.95858 ; //cria uma variavel num3 com o valor de 9,95858
let num4 = Math.ceil(num3); // variavel num4 recebe num3 e math.ceil ira arrendondar o valor para cima 
console.log(num4); // inprime 10



let num5 = 9.95858 ; //cria uma variavel num5 com o valor de 9,95858
let num6 = Math.round(num5); // variavel num6 recebe num5 e math.round ira arrendondar para o valor mais procimo
console.log(num6); // inprime 10


const aleatorio = Math.round(Math.random() * (10 - 1) + 1) ; // math.random vai dar numeros aleatorios e o math.round ira sinplificar
console.log(aleatorio)