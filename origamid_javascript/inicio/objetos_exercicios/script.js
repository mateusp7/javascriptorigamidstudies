var meusDados = {
  nome: "Mateus",
  sobrenome: "Paulo da Silva",
  idade: 20,
  sexo: "Masculino",
  altura: 1.7,
  peso: 60,
  mostrarNomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

console.log(meusDados.mostrarNomeCompleto());

var carro = {
  preco: 100,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(sexo) {
    if (sexo === "Homem") {
      return "Latir";
    } else {
      return "Não late";
    }
  },
};
