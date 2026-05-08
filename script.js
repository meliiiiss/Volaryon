const frases = [
  "O mundo não acabou… ele apenas foi reescrito.",
  "Após o despertar dos Núcleos Primordiais, a realidade se fragmentou.",
  "Criaturas surgiram das sombras entre dimensões esquecidas.",
  "Deuses antigos observam em silêncio… esperando.",
  "Apenas os Despertos podem atravessar o Véu."
];

let i = 0;
const story = document.getElementById("story");
const btn = document.getElementById("enterBtn");

function mostrarFrase() {
  if (i < frases.length) {
    story.innerHTML = frases[i];
    i++;
    setTimeout(mostrarFrase, 3000);
  } else {
    btn.classList.remove("hidden");
  }
}

window.onload = () => {
  mostrarFrase();
};
