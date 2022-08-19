class Veiculo {
    constructor(rodas) {
        this.rodas = rodas
    }
    acelerar() {
        console.log("Acelerou")
    }
}

class Moto extends Veiculo {
    constructor(rodas, capacete) {
        super(rodas);
        this.capacete = capacete;
    }
    acelerar() {
        super.acelerar();
        console.log('Acelerou rapido')
    }
    empinar() {
        return `Empinou com ${this.rodas} rodas`;
    }
}

const honda = new Moto(2, true);
const mercedes = new Veiculo(4);