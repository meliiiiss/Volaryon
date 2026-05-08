let tocou = false;

/* ===================== */
/* MÚSICA AO CLICAR */
/* ===================== */

window.addEventListener("click", () => {
  if (!tocou) {
    const music = document.getElementById("bgMusic");

    if (music) {
      music.volume = 0.4;

      const playPromise = music.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // sem log, silencioso
        });
      }
    }

    tocou = true;
  }
});

/* ===================== */
/* NARRAÇÃO */
/* ===================== */

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
      setTimeout(escrever, 160);
    } else {
      setTimeout(() => {
        if (btn) btn.classList.add("show");
      }, 800);
    }
  }

  escrever();
};
