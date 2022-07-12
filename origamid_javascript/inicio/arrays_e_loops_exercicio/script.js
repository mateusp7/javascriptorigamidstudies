// Crie uma array com os anos que o Brasil ganhou a copa

var anos = [1959, 1962, 1970, 1994, 2002];

for(let i = 0; i < anos.length; i++) {
    console.log(anos[i]);
}

anos.forEach(function(ano) {
    console.log(`O Brasil ganhou a copa de ${ano}`)
});

// Interaja com o array de frutas a baixo e pare quando chegar em Pera

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if(frutas[i] === 'Pera') {
        console.log('Encontrou a Pera');
        break;
    }
}

var ultimaFruta = frutas[frutas.length - 1];
console.log(frutas)
console.log('A última fruta é: ' + ultimaFruta)