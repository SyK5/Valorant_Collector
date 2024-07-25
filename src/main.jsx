import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./components/useContext/apiContext.jsx";

import "./index.css";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
        <Footer />
      </Router>
    </ContextProvider>
  </React.StrictMode>
);
