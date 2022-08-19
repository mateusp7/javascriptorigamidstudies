const button = {
    get tamanho() {
        return this._numero || 100;
    },
    set tamanho(numero) {
        this._numero = numero * 10;
    }
}

const form = document.querySelector('.formulario');
const inputValue = document.querySelector('#fruta');

const frutas = {
    lista: [],
    set novaFruta(fruta) {
        this.lista.push(fruta)
    } 
}

form.addEventListener('submit', (e => {
    e.preventDefault();
    const valorFruta = inputValue.value;
    frutas.novaFruta = valorFruta;
    inputValue.value = ""
    inputValue.focus();
}))

class Button {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    get element() {
        const type = this._elementType || 'button';
        const buttonElement = document.createElement(type)
        buttonElement.innerText = this.text;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    set element(type) {
        this._elementType = type;
    }
}

const blueButton = new Button("Compre agora", "blue");