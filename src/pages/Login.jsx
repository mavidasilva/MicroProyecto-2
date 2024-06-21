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

const Login = () => {
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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type={password}
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            required
          />
          <img
            src={eye}
            onClick={() => handlePasswordClick(!password)}
            alt="Toggle visibility"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleResetPassword}>Forgot Password</button>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <button onClick={handleAppleLogin}>Login with Apple</button>
    </div>
  );
};

export default Login;
