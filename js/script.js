let tocou = false;

window.addEventListener("click", () => {
  if (!tocou) {
    const music = document.getElementById("bgMusic");

    music.volume = 0.4;

    const playPromise = music.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log("Autoplay bloqueado - esperando interação válida");
      });
    }

    tocou = true;
  }
});

      console.log("Autoplay bloqueado pelo navegador");
    });
  }

  /* ===================== */
  /* TEXTO NARRADO */
  /* ===================== */

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

      // 🐌 MAIS LENTO (narrador)
      setTimeout(escrever, 320);

    } else {

      setTimeout(() => {
        btn.classList.add("show");
      }, 1200);

    }
  }

  escrever();
};
