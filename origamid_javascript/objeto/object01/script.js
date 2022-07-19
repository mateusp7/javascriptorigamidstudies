const carro = {
    rodas: 4,
    init(marca) {
        this.marca = marca;
        return this;
    },
    acelerar() {
        return this.marca + ' acelerou';
    },
    buzinar() {
        return this.marca + ' buzinou';
    }
}

const ferrari = Object.create(carro).init('Ferrari');
console.log(ferrari.acelerar())

// Método Assign (adicionar a objetos alguma função)
const funcaoAutomovel = {
    acelerar() {
        return ' acelerou';
    },
    buzinar() {
        return ' buzinou';
    }
}

const moto = {
    rodas: 2,
    capacete: true,
}

const novoCarro = {
    rodas: 4,
    mala: true,
}

Object.assign(moto, funcaoAutomovel)
Object.assign(novoCarro, funcaoAutomovel)

// Criando objetos que não podem ser modificado e nem excluidos

const novaMoto = {};
Object.defineProperties(novaMoto, {
    rodas: {
        // Value: 2, esse valor não pode ser usado quando se tem get e set
        configurable: false, // Valor default
        enumerable: false, // Valor default
        get() {
            return this._rodas;
        },
        set(valor) {
            this._rodas  = valor * 4
        },
    }
})