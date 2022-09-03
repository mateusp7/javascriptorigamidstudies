// // Recapitulando
// function perimetroForma(lado, totalDeLados) {
//     return lado * totalDeLados
// }
// console.log(perimetroForma(10, 4)) // 40
// console.log(perimetroForma(10)) // NAN
// // Sendo assim, ele n permite que omita 1 parâmetro

// function perimetroForma(lado, totalDeLados = 4) {
//     const argArray = Array.from(arguments)
//     argArray.forEach(arg => {
//         console.log(arg)
//     })
//     return lado * totalDeLados;
// }

// console.log(perimetroForma(10, 4));

// Utilização do rest
function perimetroForma(lado, totalDeLados, ...listaArgumentos) {
    console.log(listaArgumentos) // Prototype de array
    console.log(arguments) // prototype de object
    return lado * totalDeLados;
}

perimetroForma(10, 20, 3, 'Oi', 'Teste')

// Utilização do spread

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Arroz', ...legumes]
console.log(comidas)

function anunciarGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador => {
      console.log(`${ganhador} ganhou um ${premio}`)
    });
}

const ganhadores = ['Pedro', 'Marta', 'Maria','Beto'];

anunciarGanhadores('Carro', ...ganhadores);

const todosOsNumeros = [3,5,6,1,4,20,45,8,9];

const numeroMaximo = Math.max(...todosOsNumeros);
console.log(numeroMaximo)