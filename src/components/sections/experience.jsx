import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AccordionComponent from "../../components/projects/accordion";
import CardProject from "../projects/cardProject";

export default function Experience({laboral, cursos}) {
  const [ref, inView, entry] = useInView({ threshold: 0 });
  const [ref2, inView2, entry2] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      entry.target.classList.add("animate__animated", "animate__fadeInLeft","animate__fast");
    }
    if (inView2) {
      entry2.target.classList.add("animate__animated", "animate__fadeInRight","animate__fast");
    }

  }, [inView]);

  
    return(
        <section className="section-experience" id="experience">
          <h2 className="section-title">Mi experiencia</h2>
          <div className="container-experiences">
            <div className="container-experience" ref={ref}>
              <h3 className="section-title">Experiencia laboral</h3>
              <div className="wrapper-experiences">
                {laboral.map((item, index) => (
                  <div className="wrapper-experiences__item" key={item.id}>
                    <AccordionComponent key={item.id} item={item} active={index == 0 ? true : false}/>

                    {index === laboral.length - 1 ? null : (
                      <div className="container-line">
                        <div className="line"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="container-cursos" ref={ref2}>
              <h3 className="section-title">Cursos realizados</h3>
              <div className="container-items">
                {cursos.map((item) => (
                  <CardProject key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
    )
}