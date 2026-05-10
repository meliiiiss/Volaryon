import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

/* ======================= */
/* FIREBASE */
/* ======================= */

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

/* ======================= */
/* DESPERTAR */
/* ======================= */

function iniciarDespertar() {

  const tela = document.getElementById("despertarTela");

  const video1 = document.getElementById("video1");

  const video2 = document.getElementById("video2");

  if (!tela) {
    window.location.href = "home.html";
    return;
  }

  /* MOSTRAR TELA */
  tela.classList.add("mostrar");

  /* TOCAR PRIMEIRO VIDEO */
  if (video1) {

    video1.currentTime = 0;

    video1.play().catch(() => {});

  }

  /* TROCAR VIDEO */
  setTimeout(() => {

    if (video1) {
      video1.classList.remove("active");
      video1.pause();
    }

    if (video2) {

      video2.classList.add("active");

      video2.currentTime = 0;

      video2.play().catch(() => {});

    }

  }, 4500);

  /* ENTRAR HOME */
  setTimeout(() => {

    window.location.href = "home.html";

  }, 9000);

}

/* ======================= */
/* LOGIN */
/* ======================= */

window.entrar = function () {

  const email =
    document.getElementById("email").value;

  const senha =
    document.getElementById("senha").value;

  if (!email || !senha) {

    alert("Preencha e-mail e senha!");

    return;

  }

  signInWithEmailAndPassword(auth, email, senha)

    .then(() => {

      iniciarDespertar();

    })

    .catch((error) => {

      console.log(error);

      alert("Erro: " + error.message);

    });

};

/* ======================= */
/* CADASTRO */
/* ======================= */

window.criarConta = function () {

  const email =
    document.getElementById("email").value;

  const senha =
    document.getElementById("senha").value;

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

      iniciarDespertar();

    })

    .catch((error) => {

      console.log(error);

      alert("Erro: " + error.message);

    });

};
