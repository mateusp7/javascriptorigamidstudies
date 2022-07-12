const listaAnimais = document.querySelector('.animais-lista');
const listaAnimaisHeight = listaAnimais.scrollHeight;
console.log(listaAnimaisHeight);

const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const raposah2 = document.querySelector('h2');
const raposah2left = raposah2.offsetLeft; // Distancia do elemento ao lado esquerdo dele da página
console.log(raposah2left);

const rect = raposah2.getBoundingClientRect();
console.log(rect);

if(rect.top < 0) {
    console.log('Passou do h2')
}else {
    console.log('Ainda não passou do h2')
}

console.log(
    window.innerWidth, window.innerHeight,
    window.scrollY
);


const tela = window.matchMedia('(max-width: 600px)');

if(tela.matches) {
    console.log("Tela menor ou igual a 600px")
}else {
    console.log("Tela maior que 600px")
}