// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(r => r.json())
// .then(pokemon => {
//     console.log(pokemon);
// });

const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
    method: 'POST',
    body: '{"title": "JavaScript"}',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
}

// Get: Pegar alguma informação
// POST: Criar posts, usuários e etc.
// PUT: Atualiza uma informação
// DELETE: Delete alguma informação
// HEAD: Puxa apenas o headers

fetch(url, options)
.then(response => response.json())
.then(json => {
    console.log(json)
})