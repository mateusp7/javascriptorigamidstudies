// ============ Usando o blob para imagens ============

// const imagem = fetch('./imagem.png');
// imagem.then(response => response.blob())
// .then(body => {
//     const blobURL = URL.createObjectURL(body);
//     const imagemDom = document.querySelector('img');
//     imagemDom.src = blobURL;
// })

// ============ Usando o clone para Text e Json ============

// const json = fetch('https://viacep.com.br/ws/01001000/json/');
// json.then(response => {
//     const response2 = response.clone();
//     response.text().then((text) => {
//         console.log(text)
//     })
//     response2.json().then((json) => {
//         console.log(json)
//     }); 
// })


const json = fetch('https://viacep.com.br/ws/01001000/json/');

json.then(response => {
    console.log(response.status)
    console.log(response.type)
})
