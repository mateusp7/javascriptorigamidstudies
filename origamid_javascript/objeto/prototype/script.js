function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function() {
    return this.nome + ' andou';
}

const mateus = new Pessoa('Mateus', 21)

console.log(Pessoa.prototype);
console.log(mateus.prototype) // Undefined, pois, prototype está ligado apenas a função



