import data from "/data.json";
import "animate.css";
import Home from "../components/sections/home";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import Experience from "../components/sections/experience";
import Contact from "../components/sections/contact";
import Loader from "../components/loader";

import { useRef, useState } from "react";
import { useEffect } from "react";
export default function Index() {
  const { about, proyectos, cursos, laboral } = data;
  const [loading, setLoading] = useState(true);
  const refLoader = useRef(null);
  useEffect(()=>{
    setTimeout(() => {
      refLoader.current.classList.add("active")
      document.body.classList.remove("loading")
      setTimeout(() => {
        setLoading(false);
      }, 600);

    }, 500);
  },[])
  
  return (
    <main className="container main-container">
      {
        loading ? <Loader refLoader={refLoader}/> : null
      }
      <Home />

      <About about={about} />
      <Projects proyectos={proyectos} />

      <Experience laboral={laboral} cursos={cursos} />
      <Contact />
    </main>
  );
}
