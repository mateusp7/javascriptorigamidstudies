// ============== Puxando de um documento txt ==============

// const doc = fetch('./doc.txt');
// doc.then(resolucao => {
//     return resolucao.text();
// }).then((body) => {
//     document.body.innerText = body;
//     console.log(body)
// })

// ============== Puxando de um site ==============

// const cep = fetch('https://viacep.com.br/ws/01001000/json/');
// cep.then(resolucao => {
//     return resolucao.json();
// }).then((body) => {
//     console.log(body.bairro)
//     const conteudo = document.querySelector(".conteudo")
//     conteudo.innerText = body.logradouro;
// }) 

// ============== Usando um arquivo syle ==============

// const style = fetch('./style.css');
// style.then(response => response.text())
// .then(body => {
//     const conteudo = document.querySelector('.conteudo');
//     const style = document.createElement('style');
//     style.innerText = body;
//     conteudo.appendChild(style)
// })

const sobre = fetch('./sobre.html')
const div = document.createElement('div')
sobre.then(response => response.text())
.then(body => {
    div.innerHTML = body
    const titulo = div.querySelector('h1')
    console.log(titulo)
    console.log(div)
})