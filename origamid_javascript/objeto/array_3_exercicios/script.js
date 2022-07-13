const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variavel;
const primeiroComidaRemovida = comidas.shift();
console.log(primeiroComidaRemovida)
// Remova o último valor de comidas e coloque em uma variavel
const ultimaComidaRemovida = comidas.pop();
console.log(ultimaComidaRemovida)
// Adicione arroz ao final da array
comidas[comidas.length] = 'Arroz'; // ou comidas.push('Arroz');
console.log(comidas)
// Adicione 'Peixe' e 'Batata' ao inicio do array
comidas.unshift('Peixe', 'Batata');
console.log(comidas)

// ---------------------------------------------------------------------- //
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabetica
const novosEstudantes = estudantes.slice();
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(novosEstudantes.reverse());
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));

// --------------------------------------------------------------------- //
let html = `<section>
             <div>Sobre</div>
             <div>Produtos</div>
             <div>Contato</div>
            </section>`
// Substitua section por Ul e div por li, utilizando split e join
html = html.split('section').join('ul').split('div').join('li');
console.log(html)

// --------------------------------------------------------------------- //
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover salve a array original em outra variavel
const carrosCopy = carros.slice()
carros.pop();
console.log(carros)
console.log(carrosCopy)