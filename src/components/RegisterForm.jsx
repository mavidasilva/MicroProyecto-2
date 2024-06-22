import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    contraseña: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };

  return (
    <div className="relative flex justify-center items-center w-full max-w-2xl bg-white rounded-3xl shadow-md p-10 box-border">
      <div className="absolute bottom-0 right-0 w-24 h-24">
        <img src="/arbol.png" alt="Árbol" className="object-cover" />
      </div>
      <div className="w-full text-center">
        <h2 className="text-3xl font-bold mb-5 text-orange-600">Registrate</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-left text-gray-700">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Ingresa tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu nombre"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700">Contraseña</label>
            <input
              type="password"
              name="contraseña"
              placeholder="Crea tu Contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-full"
            />
          </div>
          <div className="mb-6">
            <label className="block text-left text-gray-700">Telefono</label>
            <input
              type="text"
              name="telefono"
              placeholder="Ingresa tu numero de telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-full"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-600 text-white py-4 w-full rounded-full mb-6 text-lg font-semibold"
          >
            Iniciar sesion
          </button>
        </form>
        <div className="additional-options mb-6">
          <div className="divider my-5 flex items-center justify-center">
            <span className="text-gray-500 mx-2">–</span>
            <span className="text-gray-500">or continue with</span>
            <span className="text-gray-500 mx-2">–</span>
          </div>
          <button
            onClick={() => console.log("Google Login")}
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
            onClick={() => console.log("Apple Login")}
            className="bg-gray-100 border border-gray-300 py-3 w-full flex items-center justify-center rounded-full"
          >
            <img
              src="images/appleIcon.png"
              alt="Apple Logo"
              className="h-6 mr-2"
            />
            Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
