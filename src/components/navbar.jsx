import { useEffect, useState } from "react";
import Logo2 from "../assets/logo-2.png";
import englishFlag from "../assets/icons/english.png";
import franceFlag from "../assets/icons/france.png";
import spainFlag from "../assets/icons/spain.png";
import ToggleTheme from "./toggleTheme";
import { Link, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { baseUrl } from "../main";
export default function Navbar({ navbarView }) {
  const [navbar, setNavbar] = useState(false);
  const {i18n, t} = useTranslation();
  const {lng} = useParams();
  const location = useLocation();
  const {home,about,projects,contact} = t("links")
  const langOnChange = (e)=>{
    const lang = e.target.dataset.lang;
    if(i18n.language != lang){
      i18n.changeLanguage(lang)
      localStorage.setItem("lang",lang)
    }
  }
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(()=>{
    i18n.changeLanguage(lng)
  },[location])
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    console.log(t("links"))
  });
  return (
    <header className={`header ${navbar ? "navbar-active" : ""}`}>
      {!navbarView ? (
        <nav className="container navbar">
          <div className="side left-side">
            <Link to={baseUrl}>
              <img src={Logo2} alt={Logo2} className="navbar__logo" />
            </Link>
            <ToggleTheme />
          </div>
          <div className="side right-side">
            <ul className="nav-links">
              <li className="nav-link">
                <a href="#home">{home}</a>
              </li>
              <li className="nav-link">
                <a href="#about">{about}</a>
              </li>
              <li className="nav-link">
                <a href="#projects">{projects}</a>
              </li>
              <li className="nav-link">
                <a href="#contact">{contact}</a>
              </li>
            </ul>
            <div className="container-idiomas">
              <a className="idioma">
                <img src={spainFlag} alt="" data-lang="es" onClick={langOnChange}/>
              </a>
              <a  className="idioma">
                <img src={englishFlag} alt="" data-lang="en" onClick={langOnChange}/>
              </a>
              <a className="idioma">
                <img src={franceFlag} alt="" data-lang="fr" onClick={langOnChange}/>
              </a>
            </div>
          </div>
          <div className="menu-button">
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      ) : (
        <nav className="container navbar navbar-view">
          <div className="side ">
            <Link to={baseUrl} >
              <img src={Logo2} alt={Logo2} className="navbar__logo" />
            </Link>
            <ToggleTheme />

          </div>
          <div className="container-idiomas">
              <a className="idioma">
                <img src={spainFlag} alt="" data-lang="es" onClick={langOnChange}/>
              </a>
              <a  className="idioma">
                <img src={englishFlag} alt="" data-lang="en" onClick={langOnChange}/>
              </a>
              <a className="idioma">
                <img src={franceFlag} alt="" data-lang="fr" onClick={langOnChange}/>
              </a>
            </div>
        </nav>
      )}
    </header>
  );
}
