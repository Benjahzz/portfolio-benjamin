import { useEffect, useState } from "react";

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
      <i className="fas fa-sun"></i>
      <i className="fas fa-moon"></i>
    </div>
  );
}