import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import LinkAbout from "../components/linkAbout";
import { proyectos } from "/data.json";
import Navbar from "../components/navbar";
import Loader from "../components/loader";

export default function View() {
  const { name } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const refLoader = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      refLoader.current.classList.add("active")
      document.body.classList.remove("loading")
      setTimeout(() => {
        setLoading(false);
      }, 600);

    }, 500);
    if (name) {
      const project = proyectos.find((project) => project.name === name);
      if (project) {
        setProject(project);
        
      }
    }
  }, []);
  return (
    <div className="app">
      {
        loading ? <Loader refLoader={refLoader}/> : null
      }
      <main className="container container-view">
        {project && (
          <section className="section-main">
            <div className="section-main__header">
              <div className="header__information">
                <h6 className="header__tipo">{project?.tipo}</h6>
                <h1 className="header__title section-title">{project.name}</h1>
              </div>
              <LinkAbout link={project?.link} icon="github" />
            </div>
            <div className="section-main__content">
              <div className="main__image section__image">
                <img
                  src={`/img/${project?.image}/${project?.imageMain}.png`}
                  alt=""
                />
              </div>
              <div className="main__information">
                <div className="main__tipo">{project?.puesto}</div>
                <div className="main__buttonwrapper">
                  <a className={`btn main__button ${project?.linkPagina? "" : "block"}`} href={project?.linkPagina} target="_blank">Ir a la pagina</a>
                </div>
              </div>
            </div>
          </section>
        )}
        {project?.sections?.map((section) => (
          <section className="section">
            <div className="section__information">
              <h4 className="section-title">{section.title}</h4>
              <div className="section__description">{section?.description}</div>
            </div>
            <div className="wrapper-image">
              <div className={`section__image ${section?.image?.length > 1 ? "no-shadow" : ""}`}>
                {section?.image?.map((image) => (
                  <img
                    src={`/img/${project?.image}/${image.image}.png`}
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
                  <img src={`/img/${lang}.png`} alt="" />
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
