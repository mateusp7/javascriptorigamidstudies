import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown('24 December 2022 23:59:59 GMT-0300');
const tempoParaOAnoNovo = new Countdown('31 December 2022 23:59:59 GMT-0300');

// setInterval(() => {
//     console.log(tempoParaONatal.total)
// }, 2000)

// setInterval(() => {
//     console.log(tempoParaOAnoNovo.total)
// }, 2000)

const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

setInterval(() => {
    dias.innerText = (tempoParaONatal.total.days + ":");
    horas.innerText = (tempoParaONatal.total.hours + ":");
    minutos.innerText = tempoParaONatal.total.minutes + ":";
    segundos.innerText = tempoParaONatal.total.seconds;
}, 1000)