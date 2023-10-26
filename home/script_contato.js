const formContato = document.querySelector(".formulario_contato");

let buttonReset = document.querySelector('button[type="reset"]');
let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputTexto = document.getElementById("texto");

window.onload = function() {
  var logo = document.querySelector('img[src="../image/logo.png"]');
  logo.addEventListener('mouseover', function() {
      var shaking = setInterval(function() {
          logo.style.position = 'relative';
          logo.style.left = (Math.random() * 10 - 5) + 'px';
          logo.style.top = (Math.random() * 10 - 5) + 'px';
      }, 100);
      logo.addEventListener('mouseout', function() {
          clearInterval(shaking);
          logo.style.position = '';
          logo.style.left = '';
          logo.style.top = '';
      });
  });
}


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


