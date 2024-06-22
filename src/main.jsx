import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { UserProvider } from "./hooks/user"; // Importa UserProvider
import "./index.css"; // Importar CSS

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
