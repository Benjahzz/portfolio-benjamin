import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CardProject from "../../components/projects/cardProject";
export default function Projects({proyectos}) {

  /*useEffect(() => {
    if (inView) {
      entry.target.classList.add("animate__animated", "animate__fadeInRight","animate__fast");
    }
    
  }, [inView]);*/
  return(
    <section className="section-projects" id="projects" >
    <h2 className="section-title">Mis Proyectos</h2>
    <div className="container-cards">
      {proyectos.map((item) => (
        <CardProject key={item.id} item={item} />
      ))}
    </div>
  </section>
  )
}
