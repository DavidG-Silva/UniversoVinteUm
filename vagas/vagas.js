// obtendo os id dos botões
const btn_atendimento = document.getElementById("button_vagas_atendimento");
const btn_escritorio = document.getElementById("button_vagas_escritorio");
const btn_tecnologia = document.getElementById("button_vagas_tecnoclogia");

// obtendo as classes
//seletor de atributo que seleciona todos os elementos cujo atributo id começa com a string "card_vagas_tecnologia_#001". 
//Isso permitirá que você selecione todas as divs com esse padrão de ID.
const atendimento = document.querySelectorAll('[id^="card_vagas_atendimento"]'); 
const escritorio = document.querySelectorAll('[id^="card_vagas_escritorio"]'); 
const tecnologia = document.querySelectorAll('[id^="card_vagas_tecnologia"]'); 

// adicionando a função para mostrar/ocultar as classes quancdo clicar no botão atendimento
btn_atendimento.addEventListener("click", function() {

    atendimento.forEach(function(atendimento) {
    atendimento.style.display = "block";
  });

  escritorio.forEach(function(escritorio) {
    escritorio.style.display = "none";
  });

  tecnologia.forEach(function(tecnologia) {
    tecnologia.style.display = "none";
  });
});


// adicionando a função para mostrar/ocultar as classes quancdo clicar no botão escritorio
btn_escritorio.addEventListener("click", function() {

    escritorio.forEach(function(escritorio) {
    escritorio.style.display = "block";
  });

  atendimento.forEach(function(atendimento) {
    atendimento.style.display = "none";
  });

  tecnologia.forEach(function(tecnologia) {
    tecnologia.style.display = "none";
  });
});


// adicionando a função para mostrar/ocultar as classes quancdo clicar no botão tecnologia
btn_tecnologia.addEventListener("click", function() {

    tecnologia.forEach(function(tecnologia) {
    tecnologia.style.display = "block";
  });

  atendimento.forEach(function(atendimento) {
    atendimento.style.display = "none";
  });

  escritorio.forEach(function(escritorio) {
    escritorio.style.display = "none";
  });
});

