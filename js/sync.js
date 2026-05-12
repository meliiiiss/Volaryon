import { db } from "./auth.js"; // Importa o banco de dados
import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const auth = getAuth();

// Função para enviar a ficha para o servidor
async function sincronizarComNuvem(dadosFicha) {
    const user = auth.currentUser;
    
    if (user) {
        try {
            // Salva no Firestore usando o UID único do usuário
            await setDoc(doc(db, "fichas", user.uid), dadosFicha);
            console.log("☁️ Sincronizado com o Éter (Firebase)");
        } catch (e) {
            console.error("Erro ao sincronizar:", e);
        }
    }
}

// Escutador: Sempre que a engine salvar no LocalStorage, nós enviamos para a nuvem
window.addEventListener('storage', (e) => {
    if (e.key === 'volaryon_save') {
        const dados = JSON.parse(e.newValue);
        sincronizarComNuvem(dados);
    }
});
