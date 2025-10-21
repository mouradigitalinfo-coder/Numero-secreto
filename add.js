let listaDeNumerosSorteados = [];
let numeroLimete = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela() {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    
}

function exibirMensagemIniciar() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemIniciar();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);

    }
}