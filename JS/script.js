// pega o formulario de contato pelo id
let form = document.getElementById("contact-form")
// adicona um ouvinte de evento para o envio de formulario
form.addEventListener("submit", enviarFormulario);
// função que sera chamada quando o formulario for enviado
function enviarFormulario(event){
    event.preventDefault();
    let nome = document.getElementById("name").value;
    console.log(nome);
    alert(nome+ "Seu form foi enviado")
}