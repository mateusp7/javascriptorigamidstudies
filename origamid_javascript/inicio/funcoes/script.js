function areaQuadrado(lado) {
  return lado * lado;
}

var lado = 4;

console.log(areaQuadrado(lado));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function fatorial(num) {
  if (num == 0) {
    return 1;
  }
  return num * fatorial(num - 1);
}

console.log(fatorial(3));

function somar(num) {
  if (num == 1) {
    return 1;
  }
  return num + somar(num - 1);
}

console.log(somar(4));

function imc(peso, altura) {
  const resultado = peso / (altura ** altura);
  return resultado;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "Azul") {
    return "Frase 1";
  } else if (cor === "Vermelho") {
    return "Frase 2";
  } else {
    return "Frase 3";
  }
}

console.log(corFavorita("Azul"));

function mostraConsole() {
  console.log("Oi");
}

addEventListener("click", mostraConsole);

// Ou

addEventListener("click", function () {
  console.log("Testando 02");
});

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== "number") {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193; // dentro do escopo apenas da função
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(10));

var profissao = "Desenvolvedor";

function dados() {
  var nome = "Mateus";
  var idade = 28;
  function outrosDados() {
    var endereco = "Espírito Santo";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());
// outrosDados(); // vai retornar um erro "Is not defined", pois, está fora do escopo
