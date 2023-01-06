import "animate.css";
import Home from "../components/sections/home";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import Experience from "../components/sections/experience";
import Contact from "../components/sections/contact";
import { useRef, useState } from "react";
import { useEffect } from "react";
import useImages from "../hooks/useImages";
import Loader from "../components/loader";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Index() {
  const { t } = useTranslation([
    "home",
    "about",
    "projects",
    "laboral",
    "cursos",
  ]);
  const containerRef = useRef(null);
  const loaderRef = useRef(null);
  const { imagesLoaded, setImages } = useImages();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const imgs = Array.from(containerRef.current.querySelectorAll("img"));
    setImages(imgs);
  }, []);
  useEffect(() => {
    if (imagesLoaded) {
      document.body.classList.remove("loading");
      loaderRef.current.classList.add("active");
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [imagesLoaded]);
  useEffect(() => {}, [location]);
  return (
    <main className="container main-container" ref={containerRef}>
      {loading ? <Loader refLoader={loaderRef}></Loader> : null}
      <Home />

      <About about={t("about:about")} />
      <Projects proyecto={t("projects:proyecto")} />

      <Experience laboral={t("laboral:laboral")} cursos={t("cursos:cursos")} />
      <Contact />
    </main>
  );
}
