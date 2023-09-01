import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { LinksContextProvider } from "./context/LinkContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LinksContextProvider>
        <App />
      </LinksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
