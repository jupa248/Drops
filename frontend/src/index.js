import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AppProvider } from "./contexts/AppContext";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
