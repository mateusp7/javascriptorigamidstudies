const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.splice(1, 0, 'Kia', 'Mercedes');
console.log(carros);

carros.splice(3, 2, 'Ferrari'); // Retorna os valores q ele removeu
console.log(carros);

console.log(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].copyWithin(2, 0, 2));

console.log(['Item 1', 'Item 2', 'Item 3', 'Item 4'].fill('Banana', 1))
console.log(['Carro', 'Casa', 'Quarto', 'Teste'].fill('Banana', 1, 3))

// Métodos de acesso (Não alteram o array);
const transporte1 = ['Barco', 'Avião'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
console.log(transportes)

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

console.log(linguagens.includes('css'));
console.log(linguagens.includes('html'));
console.log(linguagens.indexOf('python'));
console.log(linguagens.indexOf('js'));
console.log(linguagens.lastIndexOf('js'));

console.log(linguagens.join());
console.log(linguagens.join(" "));
console.log(linguagens.join("-_-"));

let htmlString = '<h2>Título Principal</h2>';
htmlString = htmlString.split('h2');
console.log(htmlString)
htmlString = htmlString.join('h1');
console.log(htmlString)

console.log(linguagens.slice(3))
console.log(linguagens.slice(3,5))

// const cloneLinguagem = linguagens; // isso aqui nao vai clonar, ele vai fazer um cópia mas tudo que acontecer na outra array, acontece nessa também

const cloneLinguagem = linguagens.slice(); // Isso é uma clonagem real, pois, ele retorna o vaor final do método.
