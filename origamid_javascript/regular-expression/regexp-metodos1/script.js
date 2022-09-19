// const regexp = /\w+/gi;

// // Se passarmos uma string, não precisamos dos //
// // e devemos utilizar \\ para meta characters, pois é necessário
// // escapar a \ especial. As Flags são o segundo argumento
// const regexpObj1 = new RegExp('\\w+', 'gi');
// const regexpObj2 = new RegExp(/\w+/, 'gi');

// 'JavaScript Linguagem 101'.replace(regexpObj1, 'X');
// // X X X

// // Exemplo complexo:
// const regexpTELEFONE1 = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
// const regexpTELEFONE2 = new RegExp('(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}', 'g');


// const regexp2 = /\w+/gi;
// // Principais propriedades:
// regexp.flags; // 'gi'
// regexp.global; // true
// regexp.ignoreCase; // true
// regexp.multiline; // false
// regexp.source; // '\w+'

// Primeiro metodo - regexp.test();
const regexp = /Java/g;
const frase = 'JavaScript e Java Linguagem 101';
let i = 1;
while(regexp.test(frase)) {
    console.log(i++, regexp.lastIndex);
}

// Segundo metodo - regexp.exec();

const frase2 = 'JavaScript, TypeScript, CoffeScript, Java';
const regexp2 = /\w+/g;

let regexpResult;
while((regexpResult = regexp2.exec(frase2)) !== null) {
    console.log(regexpResult[0]);
}




