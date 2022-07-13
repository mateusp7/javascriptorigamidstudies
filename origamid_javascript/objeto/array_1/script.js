const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], 
function andar(nome){console.log(nome)}];

const carros = new Array('Ford', 'Fiat', 'Honda');
carros[0] = 'Mercedes'

let li = document.querySelectorAll('li'); // Nodelist
li = Array.from(li);

const novosCarros = {
    0: 'Fiat',
    1: 'Honda',
    2: 'Forda',
    length: 4, // Propriedade obrigatória
};

const carrosArray = Array.from(novosCarros);

const frutas = ['Banana', 'Pêra', ['Uva roxa', 'Uva verde']];

// Métodos modificadores de array

instrumentos.sort(); // Ordena o vetor

const idade = [32, 21, 33, 43, 1, 12, 8];
idade.sort();

const c = ['Ford', 'Fiat', 'VW'];
c.unshift('Honda', 'Kia'); // Adiciona ao inicio do array e retorna o tamanho total
const novaArray = c.push('Ferrari'); // Adiciona ao final
console.log(novaArray) // o retorno é o length

console.log(c);
console.log(c.shift()); // Remove o primeiro item e retorna ele
console.log(c.pop()); // Remove o ultimo item e retorna ele
console.log(c);

console.log(c.reverse());

