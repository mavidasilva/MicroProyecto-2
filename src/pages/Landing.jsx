import React, { useContext } from "react";
import { logout } from "../controllers/auth";
import { UserContext } from "../hooks/user";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      <h1>Hola Bienvenidos</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Landing;
