// Exercicios
// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0)
console.log(totalCaracteres)

// Crie uma função que retorne novos elementos html, com os seguintes parâmetros: tag, classe e conteúdo.
function criarElemento(tag, classe, conteudo) {
    const novoElemento = document.createElement(tag);
    classe ? novoElemento.classList.add(classe) : null;
    conteudo ? novoElemento.innerHTML = conteudo : null;
    return novoElemento;
}

console.log(criarElemento('li', 'ativo', 'Esse é o conteúdo'))

// Crie uma nova função utilizando a anterior como base.
// Essa função deverá sempre criar h1 com a classe titulo. Porém, o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, 'h1', 'titulo')
console.log(h1Titulo('Novo conteudo'))
