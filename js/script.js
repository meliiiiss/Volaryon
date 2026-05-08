window.onload = function () {

  const texto =
    "O mundo não acabou… ele apenas foi reescrito.\n\n" +
    "Após o despertar dos Núcleos Primordiais, a realidade se fragmentou.\n\n" +
    "Criaturas surgiram das sombras entre dimensões esquecidas.\n\n" +
    "Deuses antigos observam em silêncio… esperando.\n\n" +
    "Apenas os Despertos podem atravessar o Véu.";

  const story = document.getElementById("story");
  const btn = document.getElementById("enterBtn");

  let i = 0;

  function escrever() {
    if (i < texto.length) {

      story.innerHTML += texto.charAt(i);

      i++;

      setTimeout(escrever, 45); // velocidade (mais lento = maior número)
    } else {
      setTimeout(() => {
        btn.classList.remove("hidden");
      }, 1000);
    }
  }

  escrever();
};
