//Captura de todos os elementos
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");

//botão somar
const botaoSomar = document.getElementById("btnSomar");
//botão subtrair
const botaoSubtrair = document.getElementById("btnSubtrair");
//botão multiplicar
const botaoMultiplicar = document.getElementById("btnMultiplicar");
//botão dividir
const botaoDividir = document.getElementById("btnDividir");

const botaoLimpar = document.getElementById("btnLimpar");
const pResultado = document.getElementById("resultado");

// declaração da função acontece com:
// palavra reservada "function" + nome da função + ()
// function somar() {
//     Trasformando valores em tipos numericos
//     const valor1 = Number(inputNum1.value);
//     const valor2 = Number(inputNum2.value);

//     const soma = valor1+valor2;

//     // Sobreescreve o paragrafo de resultado
//     pResultado.textContent = "Resultado: " + soma;
// };

// Validação e tratamento de exceções

//função somar
function somar(){
    const valor1 = inputNum1.value;
    const valor2 = inputNum2.value;

    if (valor1 == "" || valor2 == "") {
        pResultado.textContent = "Preencha os dois campos!";
        return;
    };

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if(isNaN(numero1) || isNaN(numero2)) {
        pResultado.textContent = "Digite apenas números válidos!";
        return;
    };

    const soma = numero1+numero2;

    pResultado.textContent = "Resultado: " + soma;
};

// Evento que realiza a soma sendo chamado com click
botaoSomar.addEventListener("click", somar);

//função subtrair
function subtrair(){
    const valor1 = inputNum1.value;
    const valor2 = inputNum2.value;

    if (valor1 == "" || valor2 == "") {
        pResultado.textContent = "Preencha os dois campos!";
        return;
    };

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if(isNaN(numero1) || isNaN(numero2)) {
        pResultado.textContent = "Digite apenas números válidos!";
        return;
    };

    const subtrair = numero1-numero2;

    pResultado.textContent = "Resultado: " + subtrair;
};
// Evento que realiza a subtração sendo chamado com click
botaoSubtrair.addEventListener("click", subtrair);

//função Multiplicar
function multiplicar(){
    const valor1 = inputNum1.value;
    const valor2 = inputNum2.value;

    if (valor1 == "" || valor2 == "") {
        pResultado.textContent = "Preencha os dois campos!";
        return;
    };

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if(isNaN(numero1) || isNaN(numero2)) {
        pResultado.textContent = "Digite apenas números válidos!";
        return;
    };

    const multiplicar = numero1*numero2;

    pResultado.textContent = "Resultado: " + multiplicar;
};
// Evento que realiza a multiplicação sendo chamado com click
botaoMultiplicar.addEventListener("click", multiplicar);

//função dividir
function dividir(){
    const valor1 = inputNum1.value;
    const valor2 = inputNum2.value;

    if (valor1 == "" || valor2 == "") {
        pResultado.textContent = "Preencha os dois campos!";
        return;
    };

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if(isNaN(numero1) || isNaN(numero2)) {
        pResultado.textContent = "Digite apenas números válidos!";
        return;
    };

    const dividir = numero1/numero2;

    pResultado.textContent = "Resultado: " + dividir;
};
// Evento que realiza a divisão sendo chamado com click
botaoDividir.addEventListener("click", dividir);

//função limpar
function limpar(){
    inputNum1.value = "";
    inputNum2.value = "";
    pResultado.textContent = "Resultado: "
};

botaoLimpar.addEventListener("click", limpar);
