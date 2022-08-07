fetch("./dados.json")
.then(response => response.text()) // Pegando o Json e transformando em texto
.then(jsonText => {
    const jsonFinal = JSON.parse(jsonText) // pegando o Json de texto e transforando em objeto
})

// Criando o objeto que não se parece com um JSON
const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript",
}
// Transformando o objeto acima em um arquivo que se parece com um Json, so que em forma de String
const stringConfig = JSON.stringify(configuracoes);


const configuracoes2 = {
    player: "Netflix",
    tempo: 10,
    filme: "O Protetor",
}

localStorage.config = JSON.stringify(configuracoes2)

console.log(JSON.parse(localStorage.config))