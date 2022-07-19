console.log(Object.getOwnPropertyDescriptor(Array))
const moto = {
    capacete: true,
}

Object.defineProperties(moto, {
    rodas: {
        enumerable: true,
        get() {
            return this._rodas;
        },
        set(valor) {
            this._rodas = valor * 4
        }
    }
})

const carro = {
    marca: 'Mercdes',
    ano: 2022,
}

Object.freeze(carro); // Congela o objeto e não se pode fazer nada mais com ele
Object.seal(carro); // 'Congela' o objeto, mas pode alterar as propriedades anteriores e nem deletar elas
Object.preventExtensions(carro); // Permite deletar propriedades anteriores, mas n deixa criar novas


const frutas = ['Banana', 'Uva'];
const frase = 'Oi Frase';
const somar = function(a,b) {
    return a + b;
}

const novoCarro = {
    marca: 'Ferrari',
    ano: 2022,
}

console.log(frutas.toString());
console.log(Object.prototype.toString.call(frase));


