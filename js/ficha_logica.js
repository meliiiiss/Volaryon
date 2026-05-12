function atualizarFicha() {
    const res = parseInt(document.getElementById('res').value) || 10;
    const ene = parseInt(document.getElementById('ene').value) || 10;

    // Fórmulas Baseadas no Manual
    const maxHP = 20 + (res * 5);
    const maxEne = 10 + (ene * 5);
    
    // Atualiza Texto
    document.getElementById('txt-hp').innerText = `${maxHP}/${maxHP}`;
    document.getElementById('txt-ene').innerText = `${maxEne}/${maxEne}`;

    // Lógica de Modificadores (Simplificada)
    const atributos = ['for', 'agi', 'res', 'ene', 'per'];
    atributos.forEach(attr => {
        let val = parseInt(document.getElementById(attr).value);
        let mod = Math.floor((val - 10) / 2);
        document.getElementById(`mod-${attr}`).innerText = (mod >= 0 ? "+" : "") + mod;
    });
}

