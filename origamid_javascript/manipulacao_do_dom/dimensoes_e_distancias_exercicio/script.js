// Verifique a distancia da primeira imagem em relação ao topo da pagina
const img = document.querySelector('img');
const imgTopo = img.getBoundingClientRect();
console.log(imgTopo.top); // Posição do elemento pro topo da página

// retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img');
function somaImagens() {
    let i = 0.0;
    imgs.forEach((imagem) => {
        i += imagem.offsetWidth;
    })
    console.log(i);
}

window.onload = function() {
    somaImagens();
}

// Verifique se os links da pagina possuem o minimo recomendado para telas utilizadas com o dedo (48px / 48px)
const links = document.querySelectorAll('a')
links.forEach((link) => {
    const linkWidth = link.offsetWidth; // Pega o tamanho do elemento
    const linkHeight = link.offsetHeight; // pega a altura do elemento
    if(linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, " - Possui acessibilidade")
    }else {
        console.log(link, ' - Não possui acessibilidade')
    }
})

// Se o browser for menor do que 728px adicione a classe menu-mobile ao menu
const tela = window.matchMedia("(max-width: 728px)"); // Pegar o width da página
const menu = document.querySelector('.menu');

if(tela.matches) {
    menu.classList.toggle('menu-mobile') // Adicionando a classe menu-mobile se a página for menor ou igual a 728px
}