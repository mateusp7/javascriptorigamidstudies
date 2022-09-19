// Métodos de String

// str.match()
const frase = 'JavaScript, TypeScript, CoffeScript, Java';
const regexp = /\w+/g;
const resultados = frase.match(regexp);
console.log(resultados);

// str.split()
const frase2 = 'JavaScript, TypeScript, CoffeScript, Java';
const regexp2 = /Script/g;
const resultados2 = frase2.split(regexp2);
console.log(resultados2);

// str.replace()

const tags = `
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>`;

const regexp3 = /(?<=<\/?)\w+/g;

const resultados3 = tags.replace(regexp3, 'div');
console.log(resultados3);

const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

const regexp4 = /(\w+@)[\w.]+/g;
// const resultados4 = emails.replace(regexp4, '$1gmail.com')
// console.log(resultados4)


const emails2 = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`

const regexp5 = /(\w+@)([\w.]+)/g;
const resultados5 = emails2.replace(regexp5, function(...args) {
    if(args[2] === 'homail.com.br') {
        return args[1] + 'hotmail.com.br';
    }else if(args[2] === 'ggmail.com.br') {
        return args[1] + 'gmail.com.br';
    }else if(args[2] === 'oulook.com.br') {
        return args[1] + 'hotmail.com.br';
    }else {
        return args[0];
    }
})

console.log(resultados5);

