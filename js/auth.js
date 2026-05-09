import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhAbXAIDT-W3tmBBSoAMW3aijvbOXUIgk",
  authDomain: "volaryon-3a9c6.firebaseapp.com",
  projectId: "volaryon-3a9c6",
  storageBucket: "volaryon-3a9c6.firebasestorage.app",
  messagingSenderId: "1039618171619",
  appId: "1:1039618171619:web:c5924e26a940b2e1a9dbd6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔑 LOGIN
window.entrar = function () {

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!email || !senha) {
    alert("Preencha e-mail e senha!");
    return;
  }

  signInWithEmailAndPassword(auth, email, senha)

    .then(() => {

      alert("Despertar realizado!");

      window.location.href = "home.html";

    })

    .catch((error) => {

      alert("Erro: " + error.message);

      console.log(error.code);

    });
};

// 🧬 CADASTRO
window.criarConta = function () {

  const email = document.getElementById("email").value;

  const senha = document.getElementById("senha").value;

  const confirmar =
    document.getElementById("confirmarSenha")?.value;

  if (!email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  if (confirmar && senha !== confirmar) {
    alert("As senhas não coincidem!");
    return;
  }

  if (senha.length < 6) {
    alert("A senha precisa ter pelo menos 6 caracteres!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, senha)

    .then(() => {

      alert("Conta criada com sucesso!");

      window.location.href = "login.html";

    })

    .catch((error) => {

      alert("Erro: " + error.message);

      console.log(error.code);

    });
};
