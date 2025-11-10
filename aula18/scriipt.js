function meuEscopo () {
    const form = document.querySelector(".form");

   /* form.onsubmit = function (evento) {
    evento.preventDefault();
    alert(1)
    };*/
    let contador = 1
function recebeeventoform(evento){
    evento.preventdefaut();
    console.log(`form nao foi enviado ${contador}`);
    contador ++;
}
form.addEventListener("submit", recebeeventoform)


 }
 meuEscopo();