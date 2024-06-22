import {
  getAdditionalUserInfo,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  OAuthProvider,
  sendPasswordResetEmail,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  setDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, googleProvider, appleProvider } from "../firebase";
import { db } from "../firebase";

// Función para registrar usuario con email y contraseña
export async function registerWithCredentials(
  name,
  email,
  password,
  number,
  career
) {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUserData(user.uid, name, email, number, career);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Función para crear datos de usuario en Firestore
export async function createUserData(id, name, email, number, career) {
  await setDoc(doc(db, "users", id), {
    name: name,
    email: email,
    userRole: "1",
    number: number,
    image: "",
    career: career,
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

// Función para iniciar sesión o registrarse con Google
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const additionalUserInfo = getAdditionalUserInfo(result);

    // Si es un nuevo usuario, crea su documento en Firestore
    if (additionalUserInfo.isNewUser) {
      await createUserData(
        user.uid,
        user.displayName,
        user.email,
        "04120000000",
        ""
      );
    }

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
      await createUserData(
        user.uid,
        user.displayName,
        user.email,
        "04120000000",
        ""
      );
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

// Función para obtener datos de usuario
export async function getUserData(email) {
  const usersCollection = collection(db, "users");
  const userQuery = query(usersCollection, where("email", "==", email));
  const userSnapshot = await getDocs(userQuery);
  const users = userSnapshot.docs.map((doc) => doc.data());
  return users[0];
}

// Función para enviar email de restablecimiento de contraseña
export async function resetPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent successfully");
  } catch (error) {
    console.error("Error sending password reset email:", error);
  }
}
