const comida = 'Pizza';
const agua = new String('Agua');

console.log(comida.length);
console.log(agua.length);
console.log(agua.at(-1)); // ou agua.length - 1
console.log(agua.at(0))

const frase = 'A melhor comida';
console.log(frase[4]);
console.log(frase.charAt(1));

const frase2 = 'A melhor linguagem é ';
const js = 'JavaScript';

console.log(frase2.concat(js));

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta));
console.log(fruta.includes(listaFrutas));

console.log(fruta.startsWith('Ba'));
console.log(fruta.endsWith('nana'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3));
console.log(transacao2.slice(0, 3));
console.log(transacao3.slice(0, 3));

console.log(transacao1.slice(12));
console.log(transacao1.slice(-4));
console.log(transacao1.slice(3, 6));

const instrumento = 'Violino';

console.log(instrumento.indexOf('v'));
console.log(instrumento.lastIndexOf('o'));
console.log(instrumento.indexOf('o'));
console.log(instrumento.indexOf('lin'));

const listaDePrecos = ['R$ 99,00', 'R$ 199,00', 'R$ 1200,00'];

listaDePrecos.forEach((preco) => {
    console.log(preco.padStart(20, '.'));
})

let listaItens = 'Camisa Bonés Calças Bemudas Vestidos Saias'
console.log(listaItens);
listaItens = listaItens.replace(/[ ]+/g, ', ')
console.log(listaItens);

const arrayList = listaItens.split(', ')
console.log(arrayList);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div')
const novoHtml = htmlArray.join('section')
console.log(htmlText)
console.log(htmlArray)
console.log(novoHtml)

const valor = '  R$ 23.00  '
console.log(valor + valor.length);
console.log(valor.trim() + valor.length);
console.log(valor.trimStart() + valor.length);
console.log(valor.trimEnd() + "-" + valor.length);

