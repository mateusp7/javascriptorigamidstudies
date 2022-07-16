// Selecione cada curso e retorne um array com objetos contendo o titulo, descrição, aulas e horas de cada curso.
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);
const arrayCursosMap = arrayCursos.map((curso) => { // não altera o array original
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = curso.querySelector('.aulas').innerText;
    const horas = curso.querySelector('.horas').innerText;
    return {
        titulo,
        descrição: descricao,
        aulas,
        horas,
    };
})
console.log(arrayCursosMap)

// Retorne uma lista com os numeros maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33]
const numerosMaiores100 = numeros.filter((numero) => {
    return numero > 100;
});

console.log(numerosMaiores100);

// Verifique se Baixo faz parte da lista de instrumentos e retorne true;
const instrumentos = ['Guittara', 'Baixo', 'Bateria', 'Teclado'];
const contemBaixo = instrumentos.some((instrumento) => {
    return instrumento === 'Baixo'; // Retorna um valor boolean, nesse caso TRUE
});
console.log(contemBaixo)

//Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99',
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    }
];

const valorTotal = compras.reduce((acumulador, item) => {
    const valorLimpo = +item.preco.replace('R$', '').trim().replace(',','.')
    return acumulador + valorLimpo;
},0)



// Teste
const produtos = compras.forEach((produto) => {
    console.log(produto.item + produto.preco)
})
console.log(valorTotal)