import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import LinkAbout from "../components/linkAbout";
import Loader from "../components/loader";
import useImages from "../hooks/useImages";
import { useTranslation } from "react-i18next";

export default function View() {
  const { t } = useTranslation();
  const { name } = useParams();
  const proyectos = t("proyectos");
  const containerRef = useRef(null);
  const loaderRef = useRef(null);
  const [project, setProject] = useState(null);
  const { imagesLoaded, setImages } = useImages();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (name) {
      const project = proyectos.find((project) => project.name === name);
      if (project) {
        setProject(project);
      }
    }
  }, []);
  useEffect(() => {
    const project = proyectos.find((project) => project.name === name);
    if (project) {
      setProject(project);
    }
  }, [t]);
  useEffect(() => {
    if (imagesLoaded) {
      document.body.classList.remove("loading");
      loaderRef.current.classList.add("active");
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [imagesLoaded]);
  useEffect(() => {
    const imgs = Array.from(containerRef.current.querySelectorAll("img"));
    setImages(imgs);
  }, [project]);
  return (
    <div className="app">
      {loading ? <Loader refLoader={loaderRef}></Loader> : null}
      <main className="container container-view" ref={containerRef}>
        <section className="section-main">
          <div className="section-main__header">
            <div className="header__information">
              <h6 className="header__tipo">{project?.tipo}</h6>
              <h1 className="header__title section-title">{project?.name}</h1>
            </div>
            <LinkAbout link={project?.link} icon="github" />
          </div>
          <div className="section-main__content">
            <div className="main__image section__image">
              {project?.image && (
                <img
                  src={`/img/${project?.image}/${project?.imageMain}.webp`}
                  alt=""
                />
              )}
            </div>
            <div className="main__information">
              <div className="main__tipo">{project?.puesto}</div>
              <div className="main__buttonwrapper">
                <a
                  className={`btn main__button ${
                    project?.linkPagina ? "" : "block"
                  }`}
                  href={project?.linkPagina}
                  target="_blank">
                  Ir a la pagina
                </a>
              </div>
            </div>
          </div>
        </section>
        {project?.sections?.map((section) => (
          <section className="section">
            <div className="section__information">
              <h4 className="section-title">{section.title}</h4>
              <div className="section__description">{section?.description}</div>
            </div>
            <div className="wrapper-image">
              <div
                className={`section__image ${
                  section?.image?.length > 1 ? "no-shadow" : ""
                }`}>
                {section?.image?.map((image) => (
                  <img
                    src={`/img/${project?.image}/${image.image}.webp`}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
        <div className="project-used">
          <div className="tools-container">
            <h4 className="section-title">Tools used</h4>
            <div className="tools">
              {project?.languages?.map((lang) => (
                <div className="tools__item">
                  <img src={`/img/${lang}.webp`} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="palette-container">
            <h4 className="section-title">Palette</h4>
            <div className="palette">
              {project?.palette?.map((palette) => (
                <div className="palette__item">
                  <div
                    className="palette__item__background"
                    style={{ backgroundColor: palette.color }}></div>
                  <h6>{palette.color}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
