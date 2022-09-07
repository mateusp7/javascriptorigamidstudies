const regexp = /Java/;

console.log('JavaScript'.replace(regexp, 'Type'));

const regexp2 = /a/g;

console.log('JavaScript'.replace(regexp2, 'i'))

const regexp3 = /o/gi;
console.log('O ovo quebrou'.replace(regexp3, 'a'))

const regexp4 = /O/g;
console.log('O ovo quebrou'.replace(regexp4, 'a'))

const regexp5 = /[ta]/gi;
console.log('O tatu tamancou o tarcio'.replace(regexp5, 'c'));

const regexp6 = /\./gi;
console.log('Eu me chamo Mateus. Seja bem-vindo. Aproveite!'.replace(regexp6, '-'))

const regexp7 = /[-.]/gi;
console.log('999.999.999-99'.replace(regexp7, '')); // exemplo de formatação de CPF

const regexp8 = /Ju[nl]ho/gi;
console.log('Junho e Julho'. replace(regexp8, 'A'))

const regexp9 = /[a-z]/gi // seleciona todas as letras de a até z, independente se for maiusculo ou minusculo
const regexp10 = /[0-9]/g
const regexp11 = /[^teste]/g // Nega todas as letras T E S T E

const regexp12 = /\w/g; // Seleciona qualquer alfanumerico e underline
const regexp13 = /\W/g; // Nega qualquer seleção alfanumerica e underline

const regexp14 = /\d/g; // Seleciona qualquer digito
const regexp15 = /\D/g; // Nega qualquer seleção de digito

const regexp16 = /\s/g; // Seleciona qualquer espaço e quebra de linha

const regexp17 = /i{3}/g; // seleciona 3 i's em sequencia

const regexp18 = /i{2,3}/g; // Seleciona no minimo 2 e no máximo 3 i's
const regexp19 = /i{2,}/g; // Selecionaa partir do segundo i

const regexp20 = /i+/g; // seleciona todos os i's isolados e todos os i's de uma palavra
console.log('Vaiiiiii'.replace(regexp20, 'i'));

const regexp21 = /i/g;
console.log('Vaiiiiii'.replace(regexp21, 'X'));

const regexp22 = /ai*/g; // Seleciona todas as ocorrerências que tenha o A sozinho ou 'ai" junto
console.log('Vai, tamanho, altura'.replace(regexp22, 'oi'))

const regexp23 = /-\d/g; // Seleciona todos os digitos que comecem com o traço
console.log('22-2323.78'.replace(regexp23, '9'))

const regexp24 = /regexp?/gi; // Seleciona todo 'regex' ou 'regexp', pois o '?' diz que o p não é obrigatório

const regexp25 = /regexp|regex/gi; //Seleciona ou regexp ou regex

const regexp26 = /^\w+/g; //Seleciona na primeira linha os caracteres alfanumericos

console.log(`mateus@raizen.com
raizen@mateus.com`.replace(regexp26, 'X'))

const regexp27 = /\w+$/g; //Seleciona na ultima linha os caracteres alfanumericos

console.log(`mateus@raizen.com
raizen@mateus.com`.replace(regexp27, 'X'))

const regexp28 = /\w+$/gm; //Seleciona de todas as ultimas linhas os caracteres alfanumericos
console.log(`mateus@raizen.com
raizen@mateus.com`.replace(regexp28, 'X'))

const regexp29 = /^\w+/gm; //Seleciona de todas as ultimas linhas os caracteres alfanumericos
console.log(`mateus@raizen.com
raizen@mateus.com`.replace(regexp29, 'X'))