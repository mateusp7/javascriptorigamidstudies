// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens2 = document.querySelectorAll('[src^="img/imagem"]');
console.log(imagens2)
const imagens3 = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagens3)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro do .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[--ultimoP.length]);
// console.log(ultimoP[ultimoP.length - 1]);
