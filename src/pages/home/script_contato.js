const formContato = document.querySelector(".formulario_contato");

let buttonReset = document.querySelector('button[type="reset"]');
let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputTexto = document.getElementById("texto");


formContato.addEventListener("submit", (event) => {
  event.preventDefault();

  const dadosMsg = {
    nome: inputNome.value,
    email: inputEmail.value,
    mensagem: inputTexto.value
  };

  alert("Obrigado! Recebemos sua mensagem e responderemos assim que possível.");

  buttonReset.click();

});
