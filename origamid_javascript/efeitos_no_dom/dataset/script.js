// Formas de selecionar a mesma div de formas diferente.
const div = document.querySelector('div'); // Mesma div
const div2 = document.querySelector('[data-cor]'); // Mesma div
const div3 = document.querySelector('[data-cor="azul"]'); // Mesma div
console.log(div) // Mesma div
console.log(div2) // Mesma div
console.log(div3) // Mesma div

div.dataset.height = 1000; // Adiciona a propriedade height
delete div.dataset.width // Dele a propriedade width

console.log(div.dataset)
console.log(div.dataset.cor)