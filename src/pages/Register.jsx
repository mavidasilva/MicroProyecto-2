import React from "react";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen bg-orange-600">
      <Header />
      <main className="flex-grow flex justify-center items-center p-6 box-border mt-24">
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
};

export default Register;
