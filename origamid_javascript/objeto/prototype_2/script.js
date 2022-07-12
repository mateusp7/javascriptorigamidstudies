// Construtores Nativos
const pais = 'Brasil'; // Está envolvido pelo construtor String
const cidade = new String('Rio'); // O construtor String

const listaAnimais = ['Cachorro', 'Gato', 'Zebra'];

const lista = document.querySelectorAll('li')

const listaToArray = Array.prototype.slice.call(lista); // Linkado ao protótipo

// Métodos do objeto x Métodos do protótipo

const listaToArray2 = Array.from(lista); // Linkado ao array

console.log(Object.getOwnPropertyNames(Array)); // Do objeto
console.log(Object.getOwnPropertyNames(Array.prototype)); // Do prototipo

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    }
}

console.log(Carro.marca); // Isso retorna uma String, ou seja, marca vai herdar todos as propriedades e métodos do objeto String
console.log(Carro.preco); // Isso retorna um Number, ou seja, preco vai herdar todos as propriedades e métodos do objeto Number
console.log(Carro.andar()); // Isso retorna um valor boolean, ou seja, andar() vai herdar todos as propriedades e métodos do valor boolean
console.log(Carro.andar); // Isso retorna a função andar, ou seja, andar vai herdar todos as propriedades e métodos da função


