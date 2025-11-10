const nome = prompt ("qual e seu nome")

document.body.innerHTML += `seu nome e ${nome}<br/>`;
document.body.innerHTML += `seu nome tem${nome.length}<br/>`;
document.body.innerHTML += `a segunda letra do seu nome e ${nome.charAt [1]}<br/>`;
document.body.innerHTML += `qual e o primeiro indice da LETRA do seu nome ${nome.indexOf('a')}<br/>`;
document.body.innerHTML += `qual e o ultimo indice da letra a no seu nome ${nome.lastIndexOf('a')}<br/>`
document.body.innerHTML += `as ultimas 3 letras do seu nome são ${nome.slice(-3)} <br/>`
document.body.innerHTML += ` as palavras do seu nove sao ${nome.split ('')} <br/>`
document.body.innerHTML += ` seu nome com letras maiusculas ${nome.toUpperCase()} <br/>`
document.body.innerHTML += `seu nome com letras menusculas ${nome.toLowerCase()} <br/>`