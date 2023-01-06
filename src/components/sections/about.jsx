import { t } from "i18next";
import CardAbout from "../../components/cardAbout";
import { useInView } from "react-intersection-observer";

export default function About({ about }) {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <section className="section-about" id="about">
      {inView && <h2 className="section-title">{about.title}</h2>}
      <p className="section-about__text">
        As a visual designer, I create branding, packaging, websites (UI/UX),
        collateral, and graphics for big & small businesses. I also help
        companies build their creative strategy by research, analysis, and
        leading workshops to help their team develop their creative vision.
      </p>
      <div className="cards-container" ref={ref}>
        {about.cards.map((item) => (
          <CardAbout key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
