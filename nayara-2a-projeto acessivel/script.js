document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  // Toggle de acessibilidade: mostrar/esconder opções e rotacionar botão
  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('ativa'); // 'ativa' conforme CSS

    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
  });

  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');

  let tamanhoAtualFonte = 1; // rem

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

  // Alterna o contraste alto
  alternaContraste.addEventListener('click', function () {
    document.body.classList.toggle('alto-contraste');
  });

  // ScrollReveal — só executa se a função existir
  if (typeof ScrollReveal !== 'undefined') {
    // Ajuste: IDs que existem no seu HTML: receitas, contato
    ScrollReveal().reveal('#receitas', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 500 });
    // Se quiser adicionar o header ou outro elemento, basta colocar aqui
  }
});
