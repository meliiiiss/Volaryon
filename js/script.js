window.onload = function () 
{

  const texto =
    "O mundo não acabou… ele apenas foi reescrito. " +
    "Após o despertar dos Núcleos Primordiais, a realidade se fragmentou. " +
    "Criaturas surgiram das sombras entre dimensões esquecidas. " +
    "Deuses antigos observam em silêncio… esperando. " +
    "Apenas os Despertos podem atravessar o Véu.";

  const story = document.getElementById("story");
  const btn = document.getElementById("enterBtn");

  let i = 0;

  // limpa tudo no começo
  story.innerHTML = "";

  function escreverTitulo() {
    if (i < titulo.length) {
      story.innerHTML += titulo.charAt(i);
      i++;
      setTimeout(escreverTitulo, 200); // lento
    } else {
      story.innerHTML += "<br><br>";
      i = 0;
      setTimeout(escreverTexto, 800);
    }
  }

  function escreverTexto() {
    if (i < texto.length) {
      story.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escreverTexto, 60); // MAIS LENTO (ajusta aqui)
    } else {
      setTimeout(() => {
        btn.classList.remove("hidden");
      }, 1200);
    }
  }

  escreverTitulo();
};
