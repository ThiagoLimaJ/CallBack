// Alunos: Thiago Lima, Iccaro Souza, Valquíria Oliveira, Ivanaldo Santos, Laura de Freitas

let escolhaJogador = parseInt(prompt("Vamos jogar Pedra, Papel e Tesoura!\nDigite 1 para Pedra, 2 para Papel e 3 para Tesoura:"));
let escolhaMaquina = parseInt(getRandomArbitrary(1, 3));

function print(a){
    switch(a){
        case 1:
            return a = "Pedra";

        case 2:
            return a = "Papel";

        case 3:
            return a = "Tesoura";

    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function jogo(escolhaJogador, escolhaMaquina){
    if (escolhaJogador == 1 && escolhaMaquina == 2){
        alert("Nossa como você é ruim!\nVocê escolheu " + print(escolhaJogador)+ ", a máquina escolheu " + print(escolhaMaquina));
    }

    if (escolhaJogador == 1 && escolhaMaquina == 3){
        alert("Meus parabéns você ganhou!\nVocê escolheu " + print(escolhaJogador)+ ", a máquina escolheu " + print(escolhaMaquina));
    }

    if (escolhaJogador == 2 && escolhaMaquina == 1){
        alert("Meus parabéns você ganhou!\nVocê escolheu " + print(escolhaJogador)+ ", a máquina escolheu " + print(escolhaMaquina));
    }

    if (escolhaJogador == 2 && escolhaMaquina == 3){
        alert("Nossa como você é ruim!\nVocê escolheu " + print(escolhaJogador)+ ", a máquina escolheu " + print(escolhaMaquina));
    }

    if (escolhaJogador == 3 && escolhaMaquina == 1){
        alert("Nossa como você é ruim!\nVocê escolheu " + print(escolhaJogador)+ ", a máquina escolheu " + print(escolhaMaquina));
    }

    if (escolhaJogador == 2 && escolhaMaquina == 2){
        alert("Meus parabéns você ganhou!\nVocê escolheu " + print(escolhaJogador)+ ", a máquina escolheu " + print(escolhaMaquina));
    }

    if (escolhaJogador == escolhaMaquina){
        alert("Empate! Vocês dois escolheram " + print(escolhaJogador));
    }
}


print(escolhaJogador);

print(escolhaMaquina);

jogo(escolhaJogador,escolhaMaquina);

