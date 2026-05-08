window.onload = function () {

  const frases = [
    "O mundo não acabou… ele apenas foi reescrito.",
    "Após o despertar dos Núcleos Primordiais, a realidade se fragmentou.",
    "Criaturas surgiram das sombras entre dimensões esquecidas.",
    "Deuses antigos observam em silêncio… esperando.",
    "Apenas os Despertos podem atravessar o Véu."
  ];

  let i = 0;
  let charIndex = 0;

  const story = document.getElementById("story");
  const btn = document.getElementById("enterBtn");

  function digitar() {
    const texto = frases[i];

    if (charIndex < texto.length) {
      story.innerHTML += texto.charAt(charIndex);
      charIndex++;
      setTimeout(digitar, 40); // velocidade da digitação
    } else {
      setTimeout(proximaFrase, 1200); // pausa entre frases
    }
  }

  function proximaFrase() {
    i++;
    if (i < frases.length) {
      story.innerHTML = "";
      charIndex = 0;
      digitar();
    } else {
      btn.classList.remove("hidden");
    }
  }

  digitar();
};
