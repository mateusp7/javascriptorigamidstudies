const primeiroH1 = document.querySelector('h1');
const listaAnimais = document.querySelector('.animais-lista');

console.log(primeiroH1);
console.log(primeiroH1.innerHTML);
console.log(primeiroH1.innerText);

// primeiroH1.innerHTML = "<p>Novo Texto</p>"

// console.log(listaAnimais.innerHTML);
// console.log(listaAnimais.innerText);

const lista = document.querySelector('.animais-lista');
console.log(lista.parentElement.parentElement); // Pega o pai esse elemento
console.log(lista.nextElementSibling); // Pega o proximo elemento depois desse
console.log(lista.previousElementSibling); // Pega o elemento anterior desse
console.log(lista.children); // gera uma HTMLCollection
console.log(lista.children[0]); // Pega o primeiro elemento dessa HTMLCollection
console.log(lista.children[lista.children.length - 1]); // Pega o último elemento dessa HTMLCollection
console.log(lista.children[--lista.children.length]); // Pega o último elemento dessa HTMLCollection
console.log(lista.querySelector('li:last-child')); // Pega o último elemento dessa HTMLCollection

const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const tituloContato = contato.querySelector(".titulo");
const mapa = contato.querySelector(".mapa");


contato.replaceChild(lista, tituloContato);
// animais.appendChild(tituloContato); // Move o elemento par ao final da section "animais"
// contato.insertBefore(animais, tituloContato); // Move para dentro de contato e antes de titulo o elemento animais
contato.insertBefore(animais, mapa); // Move para dentro de contato e antes do mapa o elemento animais
// o segundo argumento dentro do método insertBefore precisa ser filho do elemento contato



