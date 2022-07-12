var nome = "Mateus";

console.log(nome.length);
console.log(nome.charAt(0).toLocaleLowerCase());

var altura = 1.8;

console.log(altura.toString());
console.log(altura.toFixed());

var botao = document.querySelector(".btn");

function clicou() {
    console.log('Clicou')
    botao.classList.add('red');
}
botao.addEventListener('click', clicou);