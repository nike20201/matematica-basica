const numero = Number(prompt("digite um numero"));
const numerotitulo =document.getElementById("numero-titulo");
const texto =document.getElementById("texto");

numerotitulo.innerHTML = numero ;
texto.innerHTML = `<p>seu numero + 2 e ${ numero + 2}. </p>`;