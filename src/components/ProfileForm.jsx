import React, { useState, useEffect } from "react";
import { auth } from "../firebase"; // Asumiendo que tienes estas funciones en un archivo firebase.js
import { onAuthStateChanged } from "firebase/auth";
import { updateUserData, getUserData } from "../controllers/auth"; // La función que crearemos

const ProfileForm = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userData = await getUserData(currentUser.email);
        setUser(currentUser);
        setName(userData.name);
        setEmail(userData.email);
        setPhone(userData.number);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSave = async () => {
    if (user) {
      await updateUserData(user.uid, {
        name,
        email,
        password, // Si deseas actualizar la contraseña
        number: phone,
      });
      alert("Datos actualizados correctamente");
    }
  };

  return (
    <div className="relative flex justify-center items-center w-full max-w-2xl bg-white rounded-3xl shadow-md p-10 box-border">
      <div className="w-full text-center">
        <h1 className="text-3xl font-bold mb-5 text-orange-600">
          Hola {name}!
        </h1>
        <p className="mb-5 text-gray-700">Todo sobre ti en un solo lugar</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <div className="mb-4">
            <label className="block text-left text-gray-700">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full p-4 border border-gray-300 rounded-full bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700">
              Cambia tu Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña actual"
              className="w-full p-4 border border-gray-300 rounded-full"
            />
          </div>
          <div className="mb-6">
            <label className="block text-left text-gray-700">Telefono</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-full"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-600 text-white py-4 w-full rounded-full mb-6 text-lg font-semibold"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
