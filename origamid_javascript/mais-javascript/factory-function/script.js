'use strict';

function createButton(text) {
    function element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }
    return Object.freeze({
        text,
        element
    })
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');

console.log(btnComprar.element(), btnVender.element())

function Pessoa(nome) {
    if (!(this instanceof Pessoa)) // ou (!new.target)
      return new Pessoa(nome);
    this.nome = nome;
  }
  
  Pessoa.prototype.andar = function() {
    return `${this.nome} andou`;
  }
  
  const designer = Pessoa('André');