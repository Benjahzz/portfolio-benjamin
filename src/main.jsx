import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/app.scss";
import i18n from "i18next";
import Backend from "i18next-http-backend";

import { initReactI18next } from "react-i18next";
i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    backend: {
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    ns: ["home", "about", "projects", "laboral", "cursos"],
    returnObjects: true,
    debug: false,
    lng: localStorage.getItem("lang") || "es", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      formatSeparator: ",",
    },
    
  });
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
