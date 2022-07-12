// o var para funções não 'vaza', logo, é necessário que a variável seja criada no pai
var carro;
function mostrarCarro() {
    carro = 'Fusca';
    console.log(carro);
}
mostrarCarro();
console.log(carro);

// Vazando o escopo do bloco
if(true) {
    var comida = 'Melância';
    console.log(comida);
}
console.log(comida);

// Com o let ou Const a variável não vaza o escopo do bloco
if(true) {
    let mes = 'Dezembro';
    console.log(mes);
}

console.log(mes);