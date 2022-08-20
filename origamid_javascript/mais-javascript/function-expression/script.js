const somar = (a,b) => {
    return a + b;
}

// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');

console.log(priceNumber('R$ 99,99'));
// Crie uma IIFE e isole o escopo de qualquer código JS.

(function() {
    var instrumento = "Violão"
    console.log(instrumento)
})()

// Como podemos utilizar a função abaixo.
const active = callback =>  callback();
active(function() {
    console.log('Oi')
})
