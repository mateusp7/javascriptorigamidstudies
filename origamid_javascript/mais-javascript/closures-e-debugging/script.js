debugger;
function contagem() {
    let total = 0; // A função incrementar tem acesso a essa variável devido ao closures
    return function incrementar() {
        total++;
        console.log(total)
    }
}

const ativarIncrementar = contagem();
ativarIncrementar();
ativarIncrementar();
ativarIncrementar();
ativarIncrementar();
ativarIncrementar();