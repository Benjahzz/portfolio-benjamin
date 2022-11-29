import Layout from "../components/layout";
import data from "/data.json";
import Formulario from "../components/formulario";
import { useInView } from "react-intersection-observer";
import 'animate.css';
import { useEffect } from "react";
import Home from "../components/sections/home";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import Experience from "../components/sections/experience";
import Contact from "../components/sections/contact";
export default function Index() {
  const { about, proyectos, cursos, laboral } = data;
  return (
    <Layout>
      <main className="container main-container">
        <Home />

        <About about={about} />
        <Projects proyectos={proyectos}/>
        
        <Experience laboral={laboral} cursos={cursos}/>
        <Contact />
      </main>
      <footer>
        <p>
          Hecho con <span className="heart">{"<3"}</span> por Benjamin Bastidas,
          2022
        </p>
      </footer>
    </Layout>
  );
}
