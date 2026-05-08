let tocou = false;

window.addEventListener("click", () => {
  if (!tocou) {
    const music = document.getElementById("bgMusic");

    music.volume = 0.4;
    music.play();

    tocou = true;
  }
});

window.onload = function () {

  const texto =
    "O mundo não acabou… ele apenas foi reescrito.\n\n" +
    "Após o despertar dos Núcleos Primordiais, a realidade se fragmentou.\n\n" +
    "Criaturas surgiram das sombras entre dimensões esquecidas.\n\n" +
    "Deuses antigos observam em silêncio… esperando.\n\n" +
    "Apenas os Despertos podem atravessar o Véu.";

  const story = document.getElementById("story");
  const btn = document.getElementById("enterBtn");

  const palavras = texto.split(" ");
  let i = 0;

  function escrever() {

    if (i < palavras.length) {
      story.innerHTML += palavras[i] + " ";
      i++;
      setTimeout(escrever, 160); // velocidade
    } else {
      setTimeout(() => {
        btn.classList.add("show"); // 👈 PADRONIZADO
      }, 800);
    }
  }

  escrever();
};
