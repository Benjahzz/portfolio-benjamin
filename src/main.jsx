import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import detector from "i18next-browser-languagedetector";
import App from "./App";
import "./styles/app.scss";
import i18n from "./i18n";


i18n.on("languageChanged", function (lng) {
  // if the language we switched to is the default language we need to remove the /en from URL
  if (lng === i18n.options.fallbackLng[0]) {
    if (window.location.pathname.includes("/" + i18n.options.fallbackLng[0])) {
      window.location.replace("/");
    }
  }
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
