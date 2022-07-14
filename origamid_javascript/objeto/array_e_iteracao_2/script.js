const numeros = [6, 43, 22, 88, 101, 29];
const buscarMaior45 = numeros.find(x => x > 45);
console.log(`Primeiro valor acima de 45: ${buscarMaior45}`) // Retorna o valor maior que 45

const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscarUva = frutas.findIndex((fruta) => {
    return fruta === 'Uva';
})
console.log(`Index da uva ${buscarUva}`) // Retorna o index da uva

const novasFrutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const frutasFiltradas = novasFrutas.filter((fruta) => {
    return fruta;
})

console.log(novasFrutas);
console.log(frutasFiltradas);

const novosNumeros = [6, 43, 22, 88, 101, 29];
const numerosFiltrados = novosNumeros.filter(n => n > 45);
console.log(novosNumeros)
console.log(numerosFiltrados)

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

const aulasMaiores15 = aulas.filter((aula) => {
    return aula.min > 15;
})

console.log(aulasMaiores15)