let tocou = false;

/* ===================== */
/* MÚSICA AO CLICAR */
/* ===================== */

window.addEventListener("click", () => {
  if (tocou) return;

  const music = document.getElementById("bgMusic");

  if (music) {
    music.volume = 0.4;
    music.play().catch(() => {});
  }

  tocou = true;
});

/* ===================== */
/* NARRAÇÃO (SÓ NO INDEX) */
/* ===================== */

window.addEventListener("DOMContentLoaded", () => {

  const story = document.getElementById("story");
  const btn = document.getElementById("enterBtn");

  // só roda no index
  if (!story) return;

  const texto =
    "O mundo não acabou… ele apenas foi reescrito.\n\n" +
    "Após o despertar dos Núcleos Primordiais, a realidade se fragmentou.\n\n" +
    "Criaturas surgiram das sombras entre dimensões esquecidas.\n\n" +
    "Deuses antigos observam em silêncio… esperando.\n\n" +
    "Apenas os Despertos podem atravessar o Véu.";

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
      }, 1800);
    }
  }

  escrever();
});
