// Espera o site carregar
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.panteao-container');

    // Busca os dados na pasta data/
    fetch('./data/panteao.json')
        .then(response => response.json())
        .then(deuses => {
            deuses.forEach(deus => {
                // Cria o elemento do ícone
                const div = document.createElement('div');
                div.className = `icon-deus ${deus.classe}`;
                div.title = `${deus.nome} - ${deus.dominio}`;
                
                // Adiciona na tela
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Erro ao carregar deuses:', error));
});

