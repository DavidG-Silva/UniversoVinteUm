// obtendo os id dos botões
const btn_musica = document.getElementById("button_videos_educacao");
const btn_tutoriais = document.getElementById("button_videos_informatica");
const btn_esportes = document.getElementById("button_videos_profissional");

// obtendo as classes
//seletor de atributo que seleciona todos os elementos cujo atributo id começa com a string "card_vagas_musicas". 
//Isso permitirá que você selecione todas as divs com esse padrão de ID.
const musica = document.querySelectorAll('[id^="card_videos_musicas"]'); 
const tutoriais = document.querySelectorAll('[id^="card_videos_tutoriais"]'); 
const esportes = document.querySelectorAll('[id^="card_videos_esportes"]'); 

// adicionando a função para mostrar/ocultar as classes quancdo clicar no botão musica
btn_musica.addEventListener("click", function() {

    musica.forEach(function(musica) {
    musica.style.display = "block";
  });

  tutoriais.forEach(function(tutoriais) {
    tutoriais.style.display = "none";
  });

  esportes.forEach(function(esportes) {
    esportes.style.display = "none";
  });
});


// adicionando a função para mostrar/ocultar as classes quancdo clicar no botão tutoriais
btn_tutoriais.addEventListener("click", function() {

    tutoriais.forEach(function(tutoriais) {
    tutoriais.style.display = "block";
  });

  musica.forEach(function(musica) {
    musica.style.display = "none";
  });

  esportes.forEach(function(esportes) {
    esportes.style.display = "none";
  });
});


// adicionando a função para mostrar/ocultar as classes quancdo clicar no botão esportes
btn_esportes.addEventListener("click", function() {

    esportes.forEach(function(esportes) {
    esportes.style.display = "block";
  });

  musica.forEach(function(musica) {
    musica.style.display = "none";
  });

  tutoriais.forEach(function(tutoriais) {
    tutoriais.style.display = "none";
  });
});