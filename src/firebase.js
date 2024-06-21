import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
} from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyALPatfDey8edbzQP1pj48Fav_S1yMKNuA",
  authDomain: "microproyecto2-3ce53.firebaseapp.com",
  projectId: "microproyecto2-3ce53",
  storageBucket: "microproyecto2-3ce53.appspot.com",
  messagingSenderId: "330151353679",
  appId: "1:330151353679:web:2829edf7fc87b5a0dc393a",
  measurementId: "G-XED5RTLNYL",
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Configuración de autenticación
export const auth = getAuth(app);
auth.setPersistence(browserLocalPersistence);

// Proveedores de autenticación
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const appleProvider = new OAuthProvider("apple.com");
