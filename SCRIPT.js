// Controle do tamanho da fonte

let tamanhoFonte = 16;

const aumentarFonte =
document.getElementById("aumentarFonte");

const diminuirFonte =
document.getElementById("diminuirFonte");

const altoContraste =
document.getElementById("altoContraste");

aumentarFonte.addEventListener("click", () => {

    tamanhoFonte += 2;

    document.body.style.fontSize =
    tamanhoFonte + "px";

});

diminuirFonte.addEventListener("click", () => {

    tamanhoFonte -= 2;

    if(tamanhoFonte < 12){
        tamanhoFonte = 12;
    }

    document.body.style.fontSize =
    tamanhoFonte + "px";

});

altoContraste.addEventListener("click", () => {

    document.body.classList.toggle(
        "alto-contraste"
    );

});

// Quiz educativo

function verificarResposta(botao, correta){

    if(correta){

        botao.style.backgroundColor =
        "green";

        botao.textContent +=
        " ✓ Correto";

    }else{

        botao.style.backgroundColor =
        "red";

        botao.textContent +=
        " ✗ Incorreto";

    }

    botao.disabled = true;
}
