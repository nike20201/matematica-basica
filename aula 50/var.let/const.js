// Constante booleana usada para controlar os testes dos blocos
const verdadeiro = true;

// Obs importante:
// - let tem escopo de bloco: só existe dentro de { }
// - var tem escopo de função: "vaza" do bloco e pode ser sobrescrita facilmente

let nome = ' joao ';   // variável local usando let
var nome2 = 'e maria'; // variável global usando var

// Primeiro bloco: verdadeiro = true, então o código aqui roda
if (verdadeiro) {
    let nome = 'pedro';   // essa variável só existe dentro deste bloco
    var nome2 = 'maria';  // essa aqui sobrescreve a var nome2 lá de cima
    // console.log(nome);  // mostraria "pedro" se estivesse ativo
}

// Segundo bloco: também executa
if (verdadeiro){
    var nome2 = 'e ana';  // novamente sobrescreve nome2 global
    let nome = 'pedro';   // let continua sendo local ao bloco
    // console.log(nome2); // mostraria "e ana"
}

// Aqui, nome continua sendo ' joao ' (o let não foi afetado nos blocos)
// nome2 virou 'e ana' porque var foi sobrescrita dentro dos IFs
console.log(nome, nome2);

// -------------------------------------------------------------

var sobrenome = 'otavio'; // variável global usando var

// Função simples que acessa a variável global
function falaoi () {
    console.log(sobrenome); // consegue acessar porque var é global
}

falaoi(); // chama a função e imprime 'otavio'
