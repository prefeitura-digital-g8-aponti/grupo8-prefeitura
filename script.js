document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os botões da página que possuem a classe .link-btn
  const buttons = document.querySelectorAll(".link-btn");

  // Adiciona a animação tátil (efeito de clique) para cada botão
  buttons.forEach((btn) => {
    // Quando o usuário clica (pressiona o botão do mouse)
    btn.addEventListener("mousedown", function () {
      this.style.transform = "scale(0.96)";
    });

    // Quando o usuário solta o clique
    btn.addEventListener("mouseup", function () {
      this.style.transform = "scale(1) translateY(-2px)";
    });

    // Se o usuário arrastar o mouse para fora do botão enquanto clica
    btn.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
});
