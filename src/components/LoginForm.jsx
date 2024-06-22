import React, { useState, useContext } from "react";
import { usePassword } from "../hooks/password";
import { useRequiered } from "../hooks/requiered";
import { UserContext } from "../hooks/user";
import {
  loginWithEmail,
  signInWithGoogle,
  signInWithApple,
  resetPassword,
} from "../controllers/auth";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importamos los iconos

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { password, eye, handlePasswordClick } = usePassword();
  const { handleButtonClick } = useRequiered();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await loginWithEmail(email, passwordInput);
    if (user) {
      setUser(user);
      navigate("/landing");
    } else {
      alert("Failed to login");
    }
  };

  const handleGoogleLogin = async () => {
    const user = await signInWithGoogle();
    if (user) {
      setUser(user);
      navigate("/landing");
    } else {
      alert("Failed to login with Google");
    }
  };

  const handleAppleLogin = async () => {
    const user = await signInWithApple();
    if (user) {
      setUser(user);
      navigate("/landing");
    } else {
      alert("Failed to login with Apple");
    }
  };

  const handleResetPassword = async () => {
    await resetPassword(email);
    alert("Password reset email sent");
  };

  return (
    <div className="relative flex justify-center items-center w-full max-w-2xl bg-white rounded-3xl shadow-md p-10 box-border">
      <div className="w-full text-center">
        <h2 className="text-3xl font-bold mb-5">Welcome Back!</h2>
        <a href="#" className="text-orange-600 mb-4 inline-block">
          ¿Eres administrador? Ingresa aquí
        </a>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="email@correo.unimet.edu.ve"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 mb-4 border border-gray-300 rounded-full"
          />
          <div className="relative mb-4">
            <input
              type={password}
              placeholder="Contraseña"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-full"
            />
            {password === "password" ? (
              <FaEye
                onClick={() => handlePasswordClick(!password)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer h-6"
              />
            ) : (
              <FaEyeSlash
                onClick={() => handlePasswordClick(!password)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer h-6"
              />
            )}
          </div>
          <button
            type="submit"
            className="bg-orange-600 text-white py-4 w-full rounded-full mb-6 text-lg font-semibold"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="additional-options mb-6">
          <button
            onClick={handleResetPassword}
            className="text-orange-600 block mb-2"
          >
            ¿Olvidaste tu contraseña?
          </button>
          <a href="/register" className="text-orange-600 block mb-6">
            No tienes cuenta? Regístrate aquí
          </a>
          <div className="divider my-5 flex items-center justify-center">
            <span className="text-gray-500">or continue with</span>
          </div>
          <button
            onClick={handleGoogleLogin}
            className="bg-gray-100 border border-gray-300 py-3 w-full flex items-center justify-center rounded-full mb-2"
          >
            <img
              src="images/googleIcon.png"
              alt="Google Logo"
              className="h-6 mr-2"
            />
            Google
          </button>
          <button
            onClick={handleAppleLogin}
            className="bg-gray-100 border border-gray-300 py-3 w-full flex items-center justify-center rounded-full mb-2"
          >
            <img
              src="images/appleIcon.png"
              alt="Apple Logo"
              className="h-6 mr-2"
              style={{ height: "1.75rem", marginTop: "-0.25rem" }} // Ajusta el tamaño de la imagen y la posición
            />
            Apple
          </button>
        </div>
        <div className="text-xs text-gray-500 mt-6">
          Al seleccionar Iniciar sesión, aceptas nuestros{" "}
          <a href="#" className="text-gray-500 underline">
            Términos de Servicio
          </a>{" "}
          y{" "}
          <a href="#" className="text-gray-500 underline">
            Política de Privacidad
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
