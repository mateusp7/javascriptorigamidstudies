// const img = document.querySelector('img');
// console.log(img);

// function clicar(event) {
//     console.log(event);
// }
// img.addEventListener('click', clicar);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    console.log(event.currentTarget); // retorna toda a lista
    console.log(event.target); // retorna o elemento especifico que for clicado
    console.log(event.type);
}

animaisLista.addEventListener('click', callbackLista)

const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event) {
    event.preventDefault();
    // console.log(event);
    console.log(this);
    console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno)

const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);

function handleKeyBoard(event) {
    if(event.key === 'a') {
        document.body.classList.toggle('azul');
    }else if(event.key === 'v') {
        document.body.classList.toggle('vermelho')
    }
}
window.addEventListener('keydown', handleKeyBoard);

const imgs = document.querySelectorAll('img');

function handleImg (event) {
    console.log(event.target.getAttribute('src'))
}

imgs.forEach((imagem) =>{
    imagem.addEventListener('click', handleImg);
});

