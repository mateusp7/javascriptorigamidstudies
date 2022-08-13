// async function puxarDados() {
//     try{
//         const responseDados = await fetch('./dados.json');
//         const jsonDados = await responseDados.json()
//         document.body.innerText = jsonDados.aula
//     }
//     catch (erro) {
//         console.log(erro)
//     }
// }
// puxarDados();

async function puxarDados() {
    const responseDados = fetch('./dados.json');
    const responseCliente = fetch('./clientes.json');

    const jsonDados = await (await responseDados).json();
    const jsonCliente = await (await responseCliente).json();
    console.log(jsonDados)
    console.log(jsonCliente)
}

puxarDados();

// o async e await funciona apenas para promise, ele espera sempre a promise acabar.
async function asyncSemPromise() {
    // Console não irá esperar.
    await new Promise(resolve => {
        setTimeout(() => {
            console.log('Depois de 1s')
            resolve();
        }, 1000);
    });
    console.log('acabou');
}
  asyncSemPromise();