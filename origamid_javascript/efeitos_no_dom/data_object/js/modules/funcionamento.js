export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]')
    const diasSemanas = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();

    const semanaAberto = diasSemanas.indexOf(diaAgora) !== -1;
    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

    if(semanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto')
    }
}

// const agora = new Date();
// const futuro = new Date('Dec 24 2023 23:59')
// console.log(agora.getDate())
// console.log(futuro)

// function transformarDias(tempo) {
//     return tempo / (3600 * 24000)
// }

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());

// console.log("Faltam " + Math.floor(diasFuturo - diasAgora) + " dias para o natal");
// console.log(futuro.getTime())

