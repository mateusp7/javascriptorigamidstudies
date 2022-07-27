// // SetTimeOut
// const btn = document.querySelector('botao-abrir')
// btn.addEventListener('click', handleClick)
// function handleClick() {
//     // Usando arrow function o this vira o objeto que a gente selecionou ali em cima
//     setTimeout(() => {
//         console.log(this)
//         this.classList.add('active');
//     },1000)
// }

// // SetInterval
// function loop(texto) {
//     console.log(texto);
// }
// // setInterval(loop, 300, '300ms');

// let i = 0;
// const interval = setInterval(() => {
//     console.log(i++)
//     if(i > 10) {
//         clearInterval(interval);
//     }
// }, 300);

// Exercício
// Mude a cor da tela para azul e depois para vermelho a cada 2s
// function mudarClasse() {
//     document.body.classList.toggle('active')
// }
// setInterval(mudarClasse, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível inciar, pausar e retornar (duplo clique no pausar);
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo)

let i = 0;
let timer;
function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 100)
    iniciar.setAttribute('disabled', '')
}

function pausarTempo() {
    clearInterval(timer)
    iniciar.removeAttribute('disabled')
}

function resetarTempo() {
    i = 0;
    tempo.innerText = i;
}


