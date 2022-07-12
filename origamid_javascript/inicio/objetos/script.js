var quadrado = {
  quantLados: 4,
  area: function(valorlado) {
    return valorlado * valorlado;
  },
  perimetro(valorlado) {
    return valorlado * this.quantLados;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e',
  metadeHeight() {
    return this.height / 2;
  },
}

menu.backgroundColor = '#000';

var bg = menu.backgroundColor;


