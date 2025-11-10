function meuEscopo() {
   const form = document.querySelector(".form");
   const resultado = document.querySelector('.resultado'); 
   const pessoas = [];
 
   function recebeEventoForm(evento) {
     evento.preventDefault();
 
     const firstname = form.querySelector('.nome');
     const lastname = form.querySelector('.sobrenome');
     const number = form.querySelector('.numero');
     const email = form.querySelector('.email');
 
     pessoas.push({
       nome: firstname.value,
       sobrenome: lastname.value,
       numero: number.value,
       email: email.value
     });
 
     console.log(pessoas);
 
     resultado.innerHTML += `<p>${firstname.value} ${lastname.value} - ${number.value} - ${email.value}</p>`;
   }
 
   form.addEventListener('submit', recebeEventoForm);
 }
 
 meuEscopo();
 