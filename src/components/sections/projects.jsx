import CardProject from "../../components/projects/cardProject";
import Badge from "../Badge";
export default function Projects({ proyecto }) {
  
  return (
    <section className="section-projects" id="projects">
      <h2 className="section-title">{proyecto.title}</h2>
      <Badge
        label="!"
        content={<>Estos son algunos de mis proyectos, puedes encontrar más en mi <a href='https://github.com/Benjahzz' target="_blank" className="badge__anchor">Github</a></>}
      />
      <div className="container-cards">
        {proyecto.proyectos.map((item) => (
          <CardProject key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
