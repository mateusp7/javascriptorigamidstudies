// Método Apply, ele é feito para receber uma array
// Exemplos
const numeros = [10, 20, 30, 1, 3, 5, 220, 3214, 12];
console.log(Math.max.call(null, numeros)); // Retorna NaN
console.log(Math.max.apply(null, numeros)) // Retorna o maior valor do array

const p = document.querySelectorAll("p");
function itemPossuiAtivo(item) {
    return item.classList.contains('ativo');
}
const filtro1 = Array.prototype.filter.call(p, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(p, [itemPossuiAtivo]);
console.log(filtro1);
console.log(filtro2)


// Método Bind, serve para reutilização
const li = document.querySelectorAll('li');
const filtro = Array.prototype.filter.bind(li, (item) => {
    return item.classList.contains('ativo');
})

console.log(filtro())

const $ = document.querySelectorAll.bind(document);

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao}km em ${tempo} segundos`;
    }
}

console.log(carro.acelerar(100, 4));

const carroMercedes = {
    marca: 'Mercedes',
}

const acelerarMercedes = carro.acelerar.bind(carroMercedes); // Reutilizando o método do objeto carro
console.log(acelerarMercedes(100, 2));