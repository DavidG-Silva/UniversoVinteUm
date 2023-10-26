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


let botaoEdu = document.querySelector(".botoes .edu + button");
let botaoInf = document.querySelector(".botoes .informatica + button");
let botaoForm = document.querySelector(".botoes .formacao + button");
console.log(botaoEdu)
console.log(botaoInf)
console.log(botaoForm)

let tela1 = document.querySelector(".tela_1 iframe");
let tela2 = document.querySelector(".tela_2 iframe");
let tela3 = document.querySelector(".tela_3 iframe");


botaoEdu.addEventListener("click", function() {
  tela1.src = "https://www.youtube.com/embed/keKQksteyhg?si=kW8XD1ac7Vu4YupE"
  tela2.src = "https://www.youtube.com/embed/PB_3wCs6ltU?si=oHV67H_C6XKO7y3c" 
  tela3.src = "https://www.youtube.com/embed/40oi81c467k?si=cSiNse1IFHUGM7_4" 
});

botaoInf.addEventListener("click", function() {
  tela1.src = "https://www.youtube.com/embed/q4QxLJAjdIQ?si=QqlIG6Mr79sGrN4E" 
  tela2.src = "https://www.youtube.com/embed/9fNHAD7ZDL4?si=YgQarSjQlF0ny7P1"
  tela3.src = "https://www.youtube.com/embed/VC8XdmjqmpY?si=X4NneEm_b_xeNCJ-"
});

botaoForm.addEventListener("click", function() {
  tela1.src = "https://www.youtube.com/embed/jwoxEEAiCmE?si=T9Lxlx7eY7a3SgKX"
  tela2.src = "https://www.youtube.com/embed/0vUiZ3BQ6T0?si=oNlh6NrtECgvVtrT"
  tela3.src = "https://www.youtube.com/embed/PB_3wCs6ltU?si=JgouNg2xxa5wPohN"
});

