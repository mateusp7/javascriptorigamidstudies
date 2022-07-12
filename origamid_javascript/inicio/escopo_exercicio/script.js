// Por qual motivo o código abaixo retorna com erros? - R: Fora do escopo,
// e não da pra printar um 'var'
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = '4';
}
// console.log(cor, marca, portas);

// Como corrigir o erro abaixo? - Arrumado

function somarDois(x) {
    const dois = 2;
    return x + dois;
}

function dividirDois(x) {
    const dois = 2;
    return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?

const numero = 50;

for(let i = 0; i < 10; i++) {
    console.log(i);
}

const total = 10 * numero;
console.log(total);
