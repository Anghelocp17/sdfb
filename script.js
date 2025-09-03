// Importa Firebase y Auth (SDK modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyANY_osbCXNCzapfyp-GDuYf95crelAbSg",
  authDomain: "coffee-spark-sample-app-d75e3.firebaseapp.com",
  projectId: "coffee-spark-sample-app-d75e3",
  storageBucket: "coffee-spark-sample-app-d75e3.firebasestorage.app",
  messagingSenderId: "48112847741",
  appId: "1:48112847741:web:928c42c8fad58f1b085a14"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Manejo del login
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Inicio de sesión exitoso
      window.location.href = "dashboard.html"; // Redirige al panel o página principal
    })
    .catch((err) => {
      error.textContent = "Correo o contraseña incorrectos.";
      console.error("Error en login:", err.code, err.message);
    });
});
