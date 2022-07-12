const href = window.location.href;

console.log(href);

if(href === 'http://127.0.0.1:5500/manipulacao_do_dom/o-que-e-o-do/index.html') {
    console.log('Certo')
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function callBackh1() {
    console.log("Clicou em:", h1Selecionado.innerHTML);
}
h1Selecionado.addEventListener('click', callBackh1);

// ========== Outra forma de fazer, com função anônima ==========
// h1Selecionado.addEventListener('click', function() {
//     console.log("Clicou em:", h1Selecionado.innerHTML);
// })