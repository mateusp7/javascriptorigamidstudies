const menu = document.querySelector('.menu');

menu.classList.add('ativo');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if(menu.classList.contains('azul')) {
    menu.classList.add('possui-azul')
}

menu.className += ' vermelho'; 

const animais = document.querySelector('.animais');
console.log(animais.attributes);
console.log(animais.attributes[0]);
console.log(animais.attributes['id']);

const img = document.querySelector('img')
console.log(img.getAttribute('src'));

img.setAttribute('alt', 'É uma raposa'); // Nome do atributo / valor
const hasAttribute = img.hasAttribute('alt');
console.log(hasAttribute)

// Ready Only
