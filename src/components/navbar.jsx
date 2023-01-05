import { useEffect, useState } from "react";
import Logo2 from "../assets/logo-2.png";
import englishFlag from "../assets/icons/english.png";
import franceFlag from "../assets/icons/france.png";
import spainFlag from "../assets/icons/spain.png";
import ToggleTheme from "./toggleTheme";
import { Link } from "react-router-dom";
export default function Navbar({ navbarView }) {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <header className={`header ${navbar ? "navbar-active" : ""}`}>
      {!navbarView ? (
        <nav className="container navbar">
          <div className="side left-side">
            <Link to="/">
              <img src={Logo2} alt={Logo2} className="navbar__logo" />
            </Link>
            <ToggleTheme />
          </div>

          <div className="side right-side">
            <ul className="nav-links">
              <li className="nav-link">
                <a href="#home">Inicio</a>
              </li>
              <li className="nav-link">
                <a href="#about">Sobre mi</a>
              </li>
              <li className="nav-link">
                <a href="#projects">Proyectos</a>
              </li>
              <li className="nav-link">
                <a href="#contact">Contáctame</a>
              </li>
            </ul>
            <div className="container-idiomas">
              <a href="#" className="idioma">
                <img src={spainFlag} alt="" />
              </a>
              <a href="#" className="idioma">
                <img src={englishFlag} alt="" />
              </a>
              <a href="#" className="idioma">
                <img src={franceFlag} alt="" />
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
            <Link to="/">
              <img src={Logo2} alt={Logo2} className="navbar__logo" />
            </Link>
            <ToggleTheme />

          </div>
        </nav>
      )}
    </header>
  );
}
