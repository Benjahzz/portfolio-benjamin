import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import Logo2 from "../assets/logo-2.png";
import englishFlag from "../assets/icons/english.png";
import franceFlag from "../assets/icons/france.png";
import spainFlag from "../assets/icons/spain.png";
import ToggleTheme from "./toggleTheme";
export default function Navbar() {
  const [navbar , setNavbar] = useState(false);
  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', changeBackground);
  })
  return (
    <header className={`header ${navbar? "navbar-active" : ''}`}>
      <nav className="container navbar">
        <div className="side left-side">
          <img src={Logo2} alt={Logo2} className="navbar__logo" />
          <ToggleTheme/>
        </div>

        <div className="side right-side">
          <ul className="nav-links">
            <li className="nav-link">
              <a href="#home">Inicio</a>
            </li>
            <li className="nav-link">
              <a href="#about">Sobre mí</a>
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
            <a href="" className="idioma">
              <img src={franceFlag} alt="" />
            </a>
          </div>
          
        </div>
        <div className="menu-button">
            <i className="fas fa-bars"></i>
          </div>
      </nav>
    </header>
  );
}
