// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep');
const botao = document.querySelector('.botaoBuscar');
const resultadoCep = document.querySelector('.resultadoCep');

botao.addEventListener('click', handleClick);
function handleClick(event) {
    event.preventDefault();
    const cepUsuario = inputCep.value
    buscaCep(cepUsuario);
}

function buscaCep(cep) {
    const mostrarCep = fetch(`https://viacep.com.br/ws/${cep}/json/`);
    mostrarCep.then(response =>response.json())
    .then(body => {
        resultadoCep.innerText = 'Endereço: ' + body.logradouro + 
        '\nBairro: ' + body.bairro + 
        '\nCidade: ' + body.localidade +
        '\nEstado: ' + body.uf;
    });
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const valorBitcoin = document.querySelector('.valorBitcoin')
function fetchBtc() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        valorBitcoin.innerText = ("R$ " + btcJson.BRL.buy).replace('.', ',');
    });
};
// setInterval(fetchBtc, 1000 * 30);
fetchBtc();


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const botaoProximaPiada = document.querySelector('.proxima');
const piadaConteudo = document.querySelector('.piadaConteudo');
const imagemPiada = document.querySelector('.imagemChuck')

botaoProximaPiada.addEventListener('click', clicou);
// botaoProximaPiada.addEventListener('click', mostrarPiada); // Poderia ser assim e apagava o de baixo

function clicou(event) {
    event.preventDefault();
    mostrarPiada()
}


function mostrarPiada() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(jsonConteudo => jsonConteudo.json())
    .then(piada => {
        piadaConteudo.innerText = piada.value
    })
}