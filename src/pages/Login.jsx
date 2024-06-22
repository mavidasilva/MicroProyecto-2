import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-orange-600">
      <Header />
      <main className="flex-grow flex justify-center items-center p-5 box-border mt-24">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
