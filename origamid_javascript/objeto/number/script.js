console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(5)); // false

console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.3)); // false

parseFloat('99.50'); // Mesma função em o Number
console.log(Number.parseFloat('99.50')); // 99.5
console.log(Number.parseFloat('100 Reais')); // 100
console.log(Number.parseFloat('R$ 100')); // NaN
// Precisa começar com o numero

console.log(Number.parseInt('99.50', 10)); // O segundo valor é a base, nesse caso base 10
console.log(Number.parseInt(5.4351465, 10));
console.log(Number.parseInt('100 Reais', 10));
console.log(Number.parseInt('R$ 100', 10));

const preco = 2.99;
console.log(preco.toFixed()) // Retorna uma string

const carro = 1000.455;
console.log(carro.toFixed(2)) // Retorna uma string

const preco2 = 1499.49;
console.log(preco2.toFixed()) // Retorna uma string

let valor = 2.99;
console.log(valor.toString(10));

valor = valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

console.log(valor)



