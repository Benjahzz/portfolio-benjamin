import ImageHero from "../../assets/image-hero.png";
import LinkAbout from "../../components/linkAbout";
export default function Home() {
  return (
    <section className="wrapper-principal" id="home">
      <div className="container-principal">
        <div className="main-info animate__animated animate__fadeInLeft">
          <h1 className="main-info__title">
           Hola, soy Benjamin Bastidas. Un Desarrollador <span>Frontend</span> Y <span>Backend</span>
          </h1>
          <p className="main-info__text">
            Me gusta diseñar y desarrollar paginas web modernas e intuitivas que sean atractivas y puedan afectar de manera positiva en la gente.
          </p>
          <a className="btn btn-about" href="#about">
            Sobre mi
          </a>
        </div>
        <div className="hero-info animate__animated animate__fadeInRight" >
          <div className="hero-info__image">
            <img src={ImageHero} alt="hero-image" />
          </div>
          <div className="hero-info__links">
            <LinkAbout link="https://github.com/Benjahzz" icon="github" />
            <LinkAbout
              link="https://www.instagram.com/benja_bstidas/"
              icon="instagram"
            />
            <LinkAbout
              link="https://www.linkedin.com/in/benjam%C3%ADn-bastidas-8b70921a6/"
              icon="linkedin"
            />
            <LinkAbout
              link="mailto:ben.ja07@live.clc?subject=Call"
              icon="mail"
            />
          </div>
        </div>
        <a href="#about" className="arrow">
          <i className="fa-solid fa-arrow-down"></i>
        </a>
      </div>
    </section>
  );
}
