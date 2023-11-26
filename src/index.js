import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FirebaseProvider } from "./Context/Firebase";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <FirebaseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseProvider>
  </>
);
