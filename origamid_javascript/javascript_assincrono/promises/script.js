// const promesa = new Promise((resolve, reject) =>{
//     let condicao = true;
//     if(condicao) {
//         setTimeout(() => {
//             resolve({nome: 'Mateus', idade: 21, sexo: 'Masculino'});
//         }, 1000)
//     }else {
//         reject(Error('Um erro ocorreu na promise'));
//     }
// })

// const retorno = promesa
// .then(resolution => {
//     console.log(resolution)
//     resolution.profissao = 'Designer';
//     return resolution;
// })
// .then((resolution) => {
//     console.log(resolution)
// }, rejeitada => {
//     console.log(rejeitada);
// }).finally(() => {
//     console.log('Fim do código')
// })


const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Usuário Logado")
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Dados carregados")
    }, 1500)
})

const carregouTudo = Promise.all([login, dados]); // Array com o nome das promessas acima

carregouTudo.then((resolucao) => {
    console.log(resolucao)
})


const cadastrou = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Usuário cadastrado")
    }, 2000)
})

const preencheu = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Preencheu")
    }, 2500)
})

const carregado = Promise.race([cadastrou, preencheu]); // Array com o nome das promessas acima

carregado.then((resolucao) => {
    console.log(resolucao)
})