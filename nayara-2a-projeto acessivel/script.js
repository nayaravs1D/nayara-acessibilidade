document.addEventListener("DOMContentLoaded", function () {
  const botaoMenu = document.getElementById("botao-acessibilidade");
  const menuOpcoes = document.getElementById("menu-opcoes");
  const aumentarFonte = document.getElementById("aumentar-fonte");
  const diminuirFonte = document.getElementById("diminuir-fonte");
  const alternarContraste = document.getElementById("alternar-contraste");

  let tamanhoFonte = 100;

  // Abrir/fechar menu
  botaoMenu.addEventListener("click", () => {
    menuOpcoes.classList.toggle("ativa");
  });

  // Aumentar fonte
  aumentarFonte.addEventListener("click", () => {
    tamanhoFonte += 10;
    document.body.style.fontSize = tamanhoFonte + "%";
  });

  // Diminuir fonte
  diminuirFonte.addEventListener("click", () => {
    tamanhoFonte -= 10;
    if (tamanhoFonte < 50) tamanhoFonte = 50;
    document.body.style.fontSize = tamanhoFonte + "%";
  });

  // Alternar contraste
  alternarContraste.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
  });

  // ScrollReveal opcional
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal("#receitas", { delay: 500 });
  }
});
