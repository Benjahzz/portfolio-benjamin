import { useEffect, useState } from "react";
import {FaSun,FaMoon} from 'react-icons/fa';

export default function ToggleTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      document.body.classList.add("light-theme");
      setTheme("light");
    } else {
      document.body.classList.remove("light-theme");
      setTheme("dark");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
    }
  }, [theme]);
  
  return (
    <div className={`toggle-theme ${theme}`} onClick={toggleTheme}>
      <FaSun className="fa-sun fas"/>
      <FaMoon className="fa-moon fas"/>
    </div>
  );
}