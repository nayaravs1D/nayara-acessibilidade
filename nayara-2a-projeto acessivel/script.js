document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  // Toggle de acessibilidade: mostrar/esconder opções e rotacionar botão
  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao'); // se quiser animação no botão
    opcoesDeAcessibilidade.classList.toggle('ativa'); // mostra/esconde o menu

    // Ajusta aria-expanded para acessibilidade
    const estaExpandido = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', (!estaExpandido).toString());
  });

  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');

  // Pega o tamanho atual da fonte do body em rem, ou assume 1 se não estiver definido
  let tamanhoAtualFonte = parseFloat(getComputedStyle(document.body).fontSize) / 16 || 1;

  // Aumenta o tamanho da fonte (limite 1.8rem)
  aumentaFonteBotao.addEventListener('click', function () {
    if (tamanhoAtualFonte < 1.8) {
      tamanhoAtualFonte += 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte.toFixed(2)}rem`;
    }
  });

  // Diminui o tamanho da fonte (limite 0.8rem)
  diminuiFonteBotao.addEventListener('click', function () {
    if (tamanhoAtualFonte > 0.8) {
      tamanhoAtualFonte -= 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte.toFixed(2)}rem`;
    }
  });

  // Alterna o contraste alto (ajuste a classe para a que você definiu no CSS)
  alternaContraste.addEventListener('click', function () {
    document.body.classList.toggle('high-contrast'); // use 'high-contrast' se seu CSS tem essa classe
  });

  // ScrollReveal — só executa se a função existir
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('#receitas', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 500 });
  }
});
