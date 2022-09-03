const carro = {
    marca: 'Mercedes',
    rodas: 4,
    ano: 2022
}
console.log(carro.marca);

const {marca, rodas, ano} = carro;
console.log(marca)

const cliente = {
    nome: 'Andre',
    compras: {  
      digitais: {
        livros: ['Livro 1', 'Livro 2'],
        videos: ['Video JS', 'Video HTML']
      },
      fisicas: {
        cadernos: ['Caderno 1']
      }
    }
}

// const {livros, videos} = cliente.compras.digitais
// console.log(livros[0], videos[0])

const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras

console.log(digitais, fisicas)
console.log(livros);
console.log(videos);

function handleKeyboard({key}) {
    console.log(key)
}

document.addEventListener('keyup', handleKeyboard)