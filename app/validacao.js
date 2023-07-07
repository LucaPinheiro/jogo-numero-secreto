function verificaChute(chute) {
    // transformar para inteiro:
    const numero = parseInt(chute);

    // verifica se é um número válido:
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if (numeroMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += '<div>Valor fora do intervalo.</div>'
        return;
    }

    // vrifica se acertou:
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns! Você acertou o número secreto.</h2>
            <h3>O número secreto era ${numeroSecreto}.</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
          `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
         `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id === 'jogar-novamente') {
        window.location.reload();
    }
})