/* ============================================================
   VOLARYON ENGINE - Lógica de Ficha e Persistência
   ============================================================ */

// Constantes de Regras
const BASE_STATS = 5;
const MAX_POINTS = 30;

// Objeto de Dados das Raças (Expandido para bônus automáticos)
const dadosRacas = {
    Humano: { pv: 25, ene: 30, bonus: "Livre (+1 em 3 atributos)" },
    Elfyr: { pv: 20, ene: 50, bonus: "+2 ENE, +1 AGI" },
    Durkhan: { pv: 35, ene: 20, bonus: "+2 RES, +1 FOR" },
    Sylvaris: { pv: 25, ene: 40, bonus: "+2 PER, +1 ENE" },
    Infernyx: { pv: 30, ene: 35, bonus: "+2 FOR, +1 RES" }
};

// 1. Função para Salvar os Dados (LocalStorage)
function salvarFicha() {
    const ficha = {
        nome: document.querySelector('.header-info input').value,
        raca: document.getElementById('raca').value,
        deus: document.getElementById('deus-nome').innerText,
        atributos: {
            FOR: document.getElementById('FOR').value,
            AGI: document.getElementById('AGI').value,
            RES: document.getElementById('RES').value,
            ENE: document.getElementById('ENE').value,
            PER: document.getElementById('PER').value
        },
        inventario: document.querySelector('#inv textarea').value,
        biografia: document.querySelector('#lore textarea').value
    };
    
    localStorage.setItem('volaryon_ficha_ativa', JSON.stringify(ficha));
    console.log("Progresso salvo no Éter...");
}

// 2. Função para Carregar os Dados
function carregarFicha() {
    const dadosSalvos = localStorage.getItem('volaryon_ficha_ativa');
    if (!dadosSalvos) return;

    const ficha = JSON.parse(dadosSalvos);

    // Repovoar campos
    document.querySelector('.header-info input').value = ficha.nome;
    document.getElementById('raca').value = ficha.raca;
    document.getElementById('deus-nome').innerText = ficha.deus;
    
    for (let stat in ficha.atributos) {
        if (document.getElementById(stat)) {
            document.getElementById(stat).value = ficha.atributos[stat];
        }
    }
    
    document.querySelector('#inv textarea').value = ficha.inventario;
    document.querySelector('#lore textarea').value = ficha.biografia;

    calcular(); // Recalcula PV/Energia com os dados carregados
}

// 3. Listener Global para Auto-Save
// Salva sempre que o usuário tira o foco de um input ou muda um select
document.addEventListener('change', (e) => {
    salvarFicha();
});

// 4. Inicialização ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    carregarFicha();
    
    // Adiciona evento de clique no botão "Voltar" para garantir o save
    const btnVoltar = document.querySelector('.btn-roll[onclick*="home.html"]');
    if(btnVoltar) {
        btnVoltar.addEventListener('click', (e) => {
            salvarFicha();
        });
    }
});
