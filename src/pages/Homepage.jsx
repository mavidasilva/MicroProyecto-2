import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home_page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-orange-600">
      <Header />
      <main className="flex-grow flex justify-center items-center p-5 box-border mt-24">
        <div>Conocenos </div>
        <div>
          <img src="" alt="" />
        </div>
      </main>
      <Footer />
    </div>
  );
};