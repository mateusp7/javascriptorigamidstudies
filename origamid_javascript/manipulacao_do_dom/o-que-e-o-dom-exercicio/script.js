// Retorne o URL da página HTML atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Selecione o primeiro elemento da página que possua a classe ativo
const classeAtivo = document.querySelector('.ativo');
console.log("O primeiro elemento com a clase 'Ativo' se chama: ", classeAtivo.innerHTML);
console.log("O primeiro elemento com a clase 'Ativo' é: ", classeAtivo);

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log("A linguagem do navegador é: ", linguagem);

// Retorne o tamanho da pagina
const tamanhoDaPagina = window.innerHeight;
console.log("O tamanho da página é: ", tamanhoDaPagina)


// window - Navigator, location, href
// document - querySelector