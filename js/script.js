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
const racas = {

Humano: {
 bonus:{for:1, agi:1},
 passiva:"Repetir um teste por combate",
 fraqueza:"Sem afinidade"
},

Lunari: {
 bonus:{per:2, agi:1},
 passiva:"Visão no escuro",
 fraqueza:"Vulnerável mental"
},

Ferrun: {
 bonus:{res:2, for:1},
 passiva:"Reduz dano físico",
 fraqueza:"Baixa energia"
},

Vulperico: {
 bonus:{agi:2, per:1},
 passiva:"Bônus em esquiva",
 fraqueza:"Baixa resistência"
},

Serphelin: {
 bonus:{per:2, ene:1},
 passiva:"Resistência a veneno",
 fraqueza:"Frio extremo"
},

Sylvaris: {
 bonus:{ene:2, res:1},
 passiva:"Regenera fora de combate",
 fraqueza:"Fogo"
},

Thalryn: {
 bonus:{per:2, res:1},
 passiva:"Respira na água",
 fraqueza:"Desidratação"
},

Drakyn: {
 bonus:{for:2, ene:1},
 passiva:"+1d4 elemental",
 fraqueza:"Corrupção"
},

Noctari: {
 bonus:{agi:2, ene:1},
 passiva:"Furtividade noturna",
 fraqueza:"Baixa resistência"
},

Etheris: {
 bonus:{ene:2, per:1},
 passiva:"Detecta energia",
 fraqueza:"Instabilidade mental"
},

Sintarquio: {
 bonus:{res:2, ene:1},
 passiva:"Resistência física",
 fraqueza:"Baixa regeneração"
},

Vespiro: {
 bonus:{ene:2, per:1},
 passiva:"Ver espíritos",
 fraqueza:"Sensível emocional"
},

Nefari: {
 bonus:{ene:2, res:1},
 passiva:"Resistência à corrupção",
 fraqueza:"Perseguidos"
},

Abyssiano: {
 bonus:{ene:2, agi:1},
 passiva:"Causa medo",
 fraqueza:"Instabilidade"
},

Corrompido: {
 bonus:{res:2, ene:1},
 passiva:"Aumenta dano temporário",
 fraqueza:"Perda de controle"
}

};
function calcMod(valor){
    return Math.floor((valor - 10)/2);
}

function atualizarFicha(){

    let agi = parseInt(document.getElementById("agi").value)||0;

    document.getElementById("mod-agi").innerText = calcMod(agi);

    let ca = 10 + calcMod(agi);
    document.getElementById("ca").innerText = ca;
}

// preview imagem
document.getElementById("upload-img").addEventListener("change", function(e){
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(){
        document.getElementById("preview").src = reader.result;
    }

    reader.readAsDataURL(file);
});
