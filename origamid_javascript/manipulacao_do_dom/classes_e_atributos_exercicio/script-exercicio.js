// adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) =>{
    item.classList.add('ativo');
})

// Remova a classe ativo de todos os itens do menu e matenha apenas no primeiro
itensMenu.forEach((item, index) =>{
    item.classList.remove('ativo');
})
itensMenu[0].classList.add('ativo');

// verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll('img');

img.forEach((item) => {
    const possuiAtributo = item.hasAttribute('alt')
    console.log(item, possuiAtributo);
})

// Modifique o href do link externo do menu
const linksExerternos = document.querySelector('a[href^="http"]')
linksExerternos.setAttribute('href', 'https://www.google.com/')

console.log(linksExerternos);