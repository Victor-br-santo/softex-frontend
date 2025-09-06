// let peso = 70;
// let altura = 1.75;
// let imc = peso / (altura * altura);
// console.log("Peso:", peso, "KG");
// console.log("Altura:", peso, "M");
// console.log("IMC:", imc.toFixed(2));


function calcularImc() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = peso / (altura * altura);
    console.log("Peso: " + peso + "kg");
    document.getElementById("resultado").value = "Seu IMC é: " + imc.toFixed(2);

}

function calcularArea(){
    let largura = parseFloat(document.getElementById("largura").value);
    let altura1 = parseFloat(document.getElementById("altura1").value);
    let area = (largura * altura1);
    document.getElementById("resultadoArea").value = "A area é: " + area.toFixed(2);
}

function converterDolar() {
    const taxaCambio = 5.00;
    const valorReais = parseFloat(document.getElementById("valorReais").value);

    if (isNaN(valorReais) || valorReais <= 0) {
        document.getElementById("resultado").textContent = "Por favor, insira um valor válido.";
        return;
    }

    const valorDolares = (valorReais / taxaCambio).toFixed(2);
    document.getElementById("resultadoDolar").value = `O valor em dólares é: $${valorDolares}`;
}
 

function converterTemperatura(){
    let celsius = parseInt(document.getElementById("celsius").value);
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("grauFahrenheit").value = "Convertido para °F é: " + fahrenheit.toFixed(2);
}




function calcularRaio(){
    let raio = parseFloat(document.getElementById("raio").value);
    let circunferencia = 2 * Math.PI * raio;
    document.getElementById("circunferenciaCal").value = "A circunferencia é: " + circunferencia.toFixed(2);
}
let button = document.getElementById("calcularCir");
button.addEventListener("click", calcularRaio)



function calcularMedia(){
    let n_1 = parseFloat(document.getElementById("number-1").value);
    let n_2 = parseFloat(document.getElementById("number-2").value);
    let n_3 = parseFloat(document.getElementById("number-3").value);
    let n_4 = parseFloat(document.getElementById("number-4").value);
    let soma = (n_1 + n_2 + n_3 + n_4);
    let media = (n_1 + n_2 + n_3 + n_4) / 4;
    console.log("A soma é: " + soma);
    document.getElementById("mediaCalculada").value = "A Média é: " + media.toFixed(2);
}
// let button = document.getElementById("calcular-m");
// button.addEventListener("click", calcularMedia)

function limparCampos() {
    const inputs = document.querySelectorAll('input[type="text"]');
    
    inputs.forEach(input => {
        input.value = '';
    });
}




