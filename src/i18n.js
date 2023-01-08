import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import i18n from "i18next";

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
  whitelist: ["en", "es"],
  ns: ["home", "about", "projects", "laboral", "cursos"],
  returnObjects: true,
  debug: false,
  lng: "es", // if you're using a language detector, do not define the lng option
  fallbackLng: "es",

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    formatSeparator: ",",
  },
});

export default i18n;
