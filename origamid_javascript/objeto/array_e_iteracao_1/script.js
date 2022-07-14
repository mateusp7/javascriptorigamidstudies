// const carros = ['Ford', 'Fiat', 'Honda'];
// carros.forEach((item, index, array) =>{
//     console.log(item, index, array)
// })

// Usando forEach
const li = document.querySelectorAll('li');
const retornoForEach = li.forEach((i, index) => {
    i.classList.add('ativa' + index) 
});
console.log(retornoForEach)

// Usando Map
const carros = ['Ford', 'Fiat', 'Honda'];
const novaArray = carros.map((item, index, array) => {
    return item.toUpperCase();
})

novaArray[0] = 'Mercedes'
console.log(novaArray)
console.log(carros)

const numeros = [2,4,8,12];
const numeroX2 = numeros.map(item => item *2);
console.log(numeroX2)

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const tempoAulas = aulas.map(aula => aula.min)
console.log(tempoAulas)

const nomeAulas = aula => aula.nome; 
const nomeAulas2 = function(aula) { // É a mesma coisa que o de cima
    return aula.nome
} 

const arrayAulas = aulas.map(nomeAulas)
console.log(arrayAulas);

// Reduce
// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, atual, index, array) => {
    return acumulador + atual;
})

console.log(total1);

const numeros2 = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros2.reduce((anterior, atual) => {
    return anterior > atual ? anterior : atual;
})

console.log(maiorNumero)

const aulas3 = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const listarAulas = aulas3.reduce((acumulador, atual, index) => {
    acumulador[index] = atual.nome;
    return acumulador;
})

// Está procurando o primeiro true pra dar true
const frutas = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta) => {
    console.log(fruta)
    return fruta === 'Pêra';
})
console.log(temUva)

// Está procurando o primeiro false pra retornar false
const every = frutas.some((fruta) => {
    return fruta;
})
console.log(every)

const novosNumeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = novosNumeros.every((numero) => {
    return numero >= 6;
})
console.log(maiorQue3);
