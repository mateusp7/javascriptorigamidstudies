// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    this.idade = idade;
    this.andar = function() {
        console.log(nome + ' andou');
    }
}

// Crie 3 pessoas - (joao - 20 anos), (Maria - 25 anos), (Bruno - 15 anos)
const joao = new Pessoa('Joao', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e metodos:
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClasse(classe), remove a classe a todos os elementos

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function(classe) {
        elementList.forEach((item) => {
            item.classList.add(classe);
        })
    }
    this.removeClass = function(classe) {
        elementList.forEach((item) => {
            item.classList.remove(classe);
        })
    }
}

const listaItens = new Dom('li');
// const ul = new Dom('ul');
// ul.addClass('ul-classe')
listaItens.addClass('ativar');
listaItens.removeClass('ativo')
