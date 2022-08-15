// function Button(text, background) {
//     this.text = text;
//     this.background = background
// }

// Button.prototype.element = function() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     return buttonElement;
// }

// const blueButton = new Button('Comprar', 'blue');

// console.log(blueButton.element());

class Button {
    constructor(text, background, color, padding, borderRadius) {
        this.text = text;
        this.background = background;
        this.color = color;
        this.padding = padding;
        this.borderRadius = borderRadius;
    }
    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.color = this.color;
        buttonElement.style.padding = this.padding + 'px';
        buttonElement.style.borderRadius = this.borderRadius + 'px';
        return buttonElement;
    }
    appendTo(local) {
        const localFixar = document.querySelector(local);
        localFixar.appendChild(this.element());
        console.log(this)
        return this.element;
    }
}
const blueButton = new Button('Comprar', 'blue', 'white', 10, 50);
// document.body.appendChild(blueButton.element())
blueButton.appendTo('body')

// class Button2 {
//     constructor(options) {
//         this.options = options;
//     }
//     element() {
//         const elementoBotao = document.createElement('button');
//         elementoBotao.style.background = this.background;
//         elementoBotao.style.innerText = this.text;
//         elementoBotao.style.borderRadius = this.borderRadius;
//         elementoBotao.style.padding = this.padding;
//         elementoBotao.style.color = this.color;
//         return elementoBotao;
//     }
// }

// const optionsRed = {
//     background: 'red',
//     text: 'Compre Agora',
//     borderRadius: 50 + '%',
//     padding: 10 + 'px',
//     color: 'black'
// }

// const novoBotao = new Button2();
// document.body.appendChild(novoBotao.element())

class Button2 {
    constructor(options) {
        this.options = options;
    }
    static criarBotao(text, background) {
        const novoBotao = document.createElement('button');
        novoBotao.innerText = text;
        novoBotao.style.background = background;
        return novoBotao;
    }
}

const redButtonStatic = Button2.criarBotao('Clique Aqui!', 'red')
document.body.appendChild(redButtonStatic); 

class Button3 {
    constructor(text, background, color) {
        this.text = text;
        this.background = background;
        this.color = color;
    }
    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    appendTo(local) {
        const localFixar = document.querySelector(local);
        localFixar.appendChild(this.element());
        return this.element;
    }
    static orangeButton(text) {
        return new Button3(text, 'orange', 'black')
    }
}

const orangeButton = Button3.orangeButton('Compre Agora')
orangeButton.appendTo('body')
