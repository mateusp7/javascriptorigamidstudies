const mapa = document.querySelector('.mapa');

// Criando elementos para inserir no DOM
const novoh1 = document.createElement('h1'); // Cria o elemento
novoh1.innerText = "Novo Título"; // Adiciona um texto ao elemento
novoh1.classList.add("titulo"); // Adiciona a classe ao elemento
console.log(novoh1);

function handleClick() {
    mapa.appendChild(novoh1); // Insere logo após o filho de mapa o elemento novoH1
}
mapa.addEventListener('click', handleClick)

// Clonando elementos no DOM
const primeiroH1 = document.querySelector('h1'); // Selecionando o elemento que irá ser clonado
const faq = document.querySelector('.faq') // Selecionando o elemento que vamos inserir após ele
const primeiroH1Clonado = primeiroH1.cloneNode(true); // Clonando o elemento
faq.appendChild(primeiroH1Clonado); // Inserindo após o FAQ o elemento que foi clonado


