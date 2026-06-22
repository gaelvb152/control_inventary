import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getDatabase, ref, set, get, child, onValue, remove } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

// Credenciales con el enlace a tu Realtime Database
const firebaseConfig = {
  apiKey: "AIzaSyCLMkUBikp-5SV-1qx9Rxea5ImBC7quHIo",
  authDomain: "control-inventario-d3bc7.firebaseapp.com",
  databaseURL: "https://control-inventario-d3bc7-default-rtdb.firebaseio.com/",
  projectId: "control-inventario-d3bc7",
  storageBucket: "control-inventario-d3bc7.firebasestorage.app",
  messagingSenderId: "407287124420",
  appId: "1:407287124420:web:65c39f4c2d990489eed491",
  measurementId: "G-GFDNYE5T8P"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app); // Usando Realtime Database en vez de Firestore

// Exportar funciones
export { 
  app, 
  auth, 
  db, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  ref, 
  set, 
  get, 
  child, 
  onValue,
  remove
};