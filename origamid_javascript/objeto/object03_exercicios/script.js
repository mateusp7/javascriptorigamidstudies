// Crie uma função que verifique corretamente o tipo de dado
const tipoDeDado = function(item) {
    return Object.prototype.toString.call(item);
}
console.log(tipoDeDado(Array));

// Crie um objeto quadrado com a propriedade lados e torne ela imutavel
const quadrado = {};
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
    }
})

// Previna qualquer mudança no objeto abaixo
const configuracao = {
    width: 800,
    heigth: 600,
    background: '#333',
}
Object.freeze(configuracao);

// Liste o nome de todos as propriedades do protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))

