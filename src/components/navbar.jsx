import { useEffect, useState } from "react";
import Logo2 from "../assets/logo-2.png";
import englishFlag from "../assets/icons/english.png";
import spainFlag from "../assets/icons/spain.png";
import ToggleTheme from "./toggleTheme";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {getBaseUrl,useBasePath} from "../utils/utils";

export default function Navbar({ navbarView }) {
  const [navbar, setNavbar] = useState(false);
  const {i18n, t} = useTranslation("home");
  const {lng} = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const {baseUrl} = getBaseUrl()
  const basePath = useBasePath();
  
  const langOnChange = (e)=>{
    const lang = e.target.dataset.lang;
    if(i18n.language != lang){
      i18n.changeLanguage(lang)
      localStorage.setItem("lang",lang)
      const newUrl = lang === i18n.options.fallbackLng[0]? "" : "/"+lang; 
      navigate(`${newUrl}${basePath}`)
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
  });
  return (
    <header className={`header ${navbar ? "navbar-active" : ""}`}>
      {!navbarView ? (
        <nav className="container navbar">
          <div className="side left-side">
            <Link to={baseUrl}>
              <img src={Logo2} alt={Logo2} width={50} height={80} className="navbar__logo" />
            </Link>
            <ToggleTheme />
          </div>
          <div className="side right-side">
            <ul className="nav-links">
              <li className="nav-link">
                <a href="#home">{t("navbar").home}</a>
              </li>
              <li className="nav-link">
                <a href="#about">{t("navbar").about}</a>
              </li>
              <li className="nav-link">
                <a href="#projects">{t("navbar").projects}</a>
              </li>
              <li className="nav-link">
                <a href="#contact">{t("navbar").contact}</a>
              </li>
            </ul>
            <div className="container-idiomas">
              <button className="idioma" >
                <img src={spainFlag} alt="Spain flag" data-lang="es" onClick={langOnChange} width={20} height={20} />
              </button>
              <button className="idioma">
                <img src={englishFlag} alt="English flag" data-lang="en" onClick={langOnChange} width={20} height={20}/>
              </button>
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
                <img src={spainFlag} alt="Spain flag" data-lang="es" onClick={langOnChange} width={20} height={20}/>
              </a>
              <a  className="idioma">
                <img src={englishFlag} alt="English flag" data-lang="en" onClick={langOnChange} width={20} height={20}/>
              </a>
            </div>
        </nav>
      )}
    </header>
  );
}
