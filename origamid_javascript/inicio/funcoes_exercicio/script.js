function valorETruthy(valor) {
  return !!valor;
}

console.log(valorETruthy(' '));

function perimetroQuadrado(lado) {
  return lado * 4;
}

console.log(`O perímetro do quadrado é : ${perimetroQuadrado(10)}m^2`);

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.log(`A área do triângulo é : ${areaTriangulo(10,10)}`);

function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}

function isEven(numero) {
  if(numero % 2 == 0) {
    return 'O número é par';
  }else {
    return 'O número é ímpar';
  }
}

console.log(isEven(10));


console.log(`O nome completo é: ${nomeCompleto("Mateus", "Paulo")}`);

function tipoDoArgumento(argumento) {
  return typeof argumento;
}

console.log(`O tipo do argumento é: ${tipoDoArgumento("Mateus")}`);

function mostrarNomeCompleto() {
  console.log("Mateus Paulo da Silva"); 
}

const totalPaises = 193;
addEventListener('scroll', mostrarNomeCompleto);

function precisoVisitar(paisesVisitados){
  return `Ainda faltam visitar ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} países, do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));