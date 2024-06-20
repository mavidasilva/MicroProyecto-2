import {
  getAdditionalUserInfo,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  OAuthProvider,
} from "firebase/auth";
import {
  setDoc,
  doc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { auth, googleProvider, appleProvider } from "../firebase";
import { db } from "../firebase";

// Función para registrar usuario con email y contraseña
export async function registerWithCredentials(name, email, password, number) {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUserData(user.uid, name, email, number);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Función para crear datos de usuario en Firestore
export async function createUserData(id, name, email, number) {
  await setDoc(doc(db, "users", id), {
    name: name,
    email: email,
    userRole: "1",
    number: number,
    image: "",
  });
}

// Función para iniciar sesión con email y contraseña
export async function loginWithEmail(email, password) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Función para iniciar sesión o registrarse con Apple
export async function signInWithApple() {
  try {
    const result = await signInWithPopup(auth, appleProvider);
    const user = result.user;
    const additionalUserInfo = getAdditionalUserInfo(result);

    // Si es un nuevo usuario, crea su documento en Firestore
    if (additionalUserInfo.isNewUser) {
      await createUserData(user.uid, user.displayName, user.email, "", "");
    }

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Función para cerrar sesión
export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
}
