let idade = 18;
let generoFilme = "terror";
let generoFilme2 = "romace"
let temAcompanhanteAdulto = true;

switch (generoFilme) {
    case "terror":
        if (idade > 16 || temAcompanhanteAdulto) {
            console.log("pode assistir");
        } else {
            console.log("vc não pode assistir");
        }
        break;

    case "romance":
        if (idade > 12) {
            console.log("pode assistir mano");
        } else {
            console.log("pode não man");
        }
        break;
    case "comedia":
        if (idade > 1) {
            console.log("vc pode assistir meu nobre");
        } else {
            console.log("vc pode assistir meu nobre");
        }
}


function verificarNumero() {
    let number = parseFloat(document.getElementById("number").value);
    if (number % 2 == 0) {
        document.getElementById("resultadoNumber").value = "Par: " + number.toFixed(2);
    } else {
        document.getElementById("resultadoNumber").value = "Impar: " + number.toFixed(2);
    }
}


let nome = document.getElementById("nome");
let salarioBruto = document.getElementById("salario");
let dependentes = document.getElementById("dependentes");
botaoCalcular.addEventListener("click", calcularSalario);

function calcularSalario() {
    let inss = 0.0;
    let salarioBrutoValor = parseFloat(salarioBruto.value);
    let dependentesValor = parseInt(dependentes.value);
    let salarioLiquido = 0.0;
    // calculo do inss
    if (salarioBrutoValor <= 300) {
        inss = salarioBruto * 0.08;
    } else if (salarioBrutoValor > 300 && salarioBrutoValor <= 700) {
        inss = salarioBruto * 0.09
    } else {
        inss = salarioBrutoValor * 0.1;
    }
    salarioLiquido = salarioBrutoValor - inss + ( 15 * dependentesValor) + 40 + 100;
    alert("O salario liquido do funcionario " + nome.value + " é de R$" + salarioLiquido.toFixed(2));
}
