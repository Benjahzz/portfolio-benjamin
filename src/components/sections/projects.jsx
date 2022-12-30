import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CardProject from "../../components/projects/cardProject";
import Badge from "../Badge";
export default function Projects({ proyectos }) {
  /*useEffect(() => {
    if (inView) {
      entry.target.classList.add("animate__animated", "animate__fadeInRight","animate__fast");
    }
    
  }, [inView]);*/
  return (
    <section className="section-projects" id="projects">
      <h2 className="section-title">Mis Proyectos </h2>
      <Badge
        label="!"
        content={<>Estos son algunos de mis proyectos, puedes encontrar más en mi <a href='https://github.com/Benjahzz' target="_blank" className="badge__anchor">Github</a></>}
      />
      <div className="container-cards">
        {proyectos.map((item) => (
          <CardProject key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
