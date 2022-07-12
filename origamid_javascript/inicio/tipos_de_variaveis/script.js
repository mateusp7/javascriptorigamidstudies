var x = "10s";
var y = "10s";

console.log(+x + +y);

var x2 = "200";
var y2 = 50;

console.log(+x2 + y2);

var x3 = 5;
console.log(++x3);

var numero = +"80" / 2;
var unidade = "Kg";
var peso = numero + unidade;

console.log(peso);

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("A cor é azul");
    break;
  case "Vermelho":
    console.log("A cor é vermelha");
    break;
  case "Branco":
    console.log("A cor é branco");
    break;
  default:
    console.log("Nenhuma das cores");
}
