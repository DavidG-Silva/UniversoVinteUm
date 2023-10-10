// obtendo os id dos botões
const btn_cinema = document.getElementById("button_agenda_cinema");
const btn_shows = document.getElementById("button_agenda_shows");
const btn_teatro = document.getElementById("button_agenda_teatro");

// obtendo as classes
const cinema_elementos = document.querySelectorAll(".cards_agenda_cinema");
const shows_elementos = document.querySelectorAll(".cards_agenda_shows"); 
const teatro_elementos = document.querySelectorAll(".cards_agenda_teatro"); 

// adicionando a função para mostrar/ocultar as classes quancdo clicar no botão cinema
btn_cinema.addEventListener("click", function() {

    cinema_elementos.forEach(function(cinema_elemento) {
    cinema_elemento.style.display = "block";
  });

  shows_elementos.forEach(function(shows_elemento) {
    shows_elemento.style.display = "none";
  });

  teatro_elementos.forEach(function(teatro_elemento) {
    teatro_elemento.style.display = "none";
  });
});



// adicionando a função para mostrar/ocultar as classes quancdo clicar no botão shows
btn_shows.addEventListener("click", function() {

  shows_elementos.forEach(function(shows_elemento) {
    shows_elemento.style.display = "block";
  });

  cinema_elementos.forEach(function(cinema_elemento) {
    cinema_elemento.style.display = "none";
  });

  teatro_elementos.forEach(function(teatro_elemento) {
    teatro_elemento.style.display = "none";
  });
});


// adicionando a função para mostrar/ocultar as classes quancdo clicar no botão teatro
btn_teatro.addEventListener("click", function() {

    teatro_elementos.forEach(function(teatro_elemento) {
        teatro_elemento.style.display = "block";
      });
    
    shows_elementos.forEach(function(shows_elemento) {
      shows_elemento.style.display = "none";
    });
  
    cinema_elementos.forEach(function(cinema_elemento) {
      cinema_elemento.style.display = "none";
    });
  

  });






