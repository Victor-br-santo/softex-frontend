let idade = 18;
let generoFilme = "terror";
let generoFilme2 = "romace"
let temAcompanhanteAdulto = false;

switch (generoFilme) {
    case "terror":
        if (idade > 16 || temAcompanhanteAdulto) {
            console.log("pode assistir");
        } else {
            console.log("vc não pode assistir")
        }
        break;

    case "romance":
        if (idade >= 18) {
            console.log("pode assistir mano");
        } else {
            console.log("pode não man")
        }

}
