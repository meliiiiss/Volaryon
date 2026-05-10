let tocou = false;

/* ======================= */
/* MÚSICA */
/* ======================= */

window.addEventListener("click", () => {

  if (tocou) return;

  const music = document.getElementById("bgMusic");

  if (!music) return;

  music.volume = 0.4;

  music.play().catch((erro) => {
    console.log("Autoplay bloqueado:", erro);
  });

  tocou = true;

});

/* ======================= */
/* HISTÓRIA INTRO */
/* ======================= */

window.addEventListener("DOMContentLoaded", () => {

  const story = document.getElementById("story");
  const btn = document.getElementById("enterBtn");

  // só roda no index
  if (!story || !btn) return;

  const texto =
    "O mundo não acabou… ele apenas foi reescrito.\n\n" +
    "Após o despertar dos Núcleos Primordiais, a realidade se fragmentou.\n\n" +
    "Criaturas surgiram das sombras entre dimensões esquecidas.\n\n" +
    "Deuses antigos observam em silêncio… esperando.\n\n" +
    "Apenas os Despertos podem atravessar o Véu.";

  const palavras = texto.split(" ");

  let i = 0;

  // limpa texto
  story.innerHTML = "";

  // esconde botão no início
  btn.classList.remove("show");

  function escrever() {

    if (i < palavras.length) {

      story.innerHTML += palavras[i] + " ";

      i++;

      setTimeout(escrever, 120);

    } else {

      // MOSTRA BOTÃO
      btn.style.display = "inline-block";

      setTimeout(() => {
        btn.classList.add("show");
      }, 500);

    }

  }

  escrever();

});
