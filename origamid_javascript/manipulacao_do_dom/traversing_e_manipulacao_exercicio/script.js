// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const menuClonado = menu.cloneNode(true);
copy.appendChild(menuClonado);

// Selecione o primeiro DT da dl de faq
const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt');

// Selecione o DD referente ao primeiro DT
const primeiroDD = primeiroDt.nextElementSibling;
console.log(primeiroDD);

// Substitua o conteudo html de .faq pelo de .animais
const animais = document.querySelector('.animais')
faq.innerHTML = animais.innerHTML;


