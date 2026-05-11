let tocou = false;

/* ======================= */
/* MÚSICA (INTERAÇÃO DO USUÁRIO) */
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

}, { once: true }); // evita listener eterno

/* ======================= */
/* HISTÓRIA INTRO (INDEX) */
/* ======================= */

window.addEventListener("DOMContentLoaded", () => {

  const story = document.getElementById("story");
  const btn = document.getElementById("enterBtn");

  // garante que só roda no index
  if (!story || !btn) return;

  const texto = [
    "O mundo não acabou… ele apenas foi reescrito.",
    "Após o despertar dos Núcleos Primordiais, a realidade se fragmentou.",
    "Criaturas surgiram das sombras entre dimensões esquecidas.",
    "Deuses antigos observam em silêncio… esperando.",
    "Apenas os Despertos podem atravessar o Véu."
  ];

  let i = 0;

  story.innerHTML = "";
  btn.style.display = "none";

  function escrever() {

    if (i < texto.length) {

      story.innerHTML += texto[i] + "<br><br>";
      i++;

      setTimeout(escrever, 900);

    } else {

      btn.style.display = "inline-block";

      setTimeout(() => {
        btn.classList.add("show");
      }, 300);

    }

  }

  escrever();

});
let xpAtual = 0;
let xpMax = 500;
let nivel = 1;

// simulação (depois você liga com sistema real)
xpAtual = localStorage.getItem("xpConta") || 0;

function atualizarXP() {
  let porcentagem = (xpAtual / xpMax) * 100;

  document.getElementById("xpFill").style.width = porcentagem + "%";
  document.getElementById("xpTexto").innerText = `${xpAtual} / ${xpMax} XP`;
  document.getElementById("nivelTexto").innerText = `Desperta • Nível ${nivel}`;
}

atualizarXP();
