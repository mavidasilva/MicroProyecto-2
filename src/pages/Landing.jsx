import React, { useContext } from "react";
import { logout } from "../controllers/auth";
import { UserContext } from "../hooks/user";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderSesion from "../components/HeaderSesion";

const Landing = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen bg-orange-600">
      <HeaderSesion />
      <main className="flex-grow flex justify-center items-center p-5 box-border mt-24">
        <h1>Hola Bienvenidos</h1>
        <button onClick={handleLogout}>Logout</button>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
