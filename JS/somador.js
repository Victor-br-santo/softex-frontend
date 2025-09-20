// let cont = 0;
// let cont_1 = 0;
// let media = 0;
// let qtd = 20000;

// while (cont <= qtd) {
//     if (cont % 3 == 1) {
//         cont_1 ++;
//     }
//     cont ++;
// }
// console.log("a quantidade é de numeros multiplos é:", cont_1);

// let numero = 11;
// let contDivisores = 0;
// let divisor = 2;

// while (numero != 1) {
//    if (numero % divisor != 0) {
//       divisor++;
//       console.log("Divisor testado: ", + divisor);
//    } else {
//       console.log("Divisor encontrado: ", + divisor);
//       numero = numero / divisor;
//       contDivisores++;
//    }
// }
// if (contDivisores < 2) {
//    console.log("O numero é primo");
// } else {
//    console.log("O numero não é primo");
// }


let botao = document.getElementById("calcular");
botao.addEventListener("click", calcularTabuada);

function calcularTabuada() {
   let input = document.getElementById("numero").value;
   let numero = parseInt(input);
   // calculo da tabuada
   let resultado ="";
   for(let i = 1; i <= 10; i++){
      resultado = numero+" x "+i+" = " +(numero*i)+"\n";
      console.log(resultado)
   }
}

