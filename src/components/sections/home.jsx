import { useInView } from "react-intersection-observer";
import ImageHero from "../../assets/image-hero.png";
import LinkAbout from "../../components/linkAbout";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation(["home"]);
  return (
    <section className="wrapper-principal" id="home">
      <div className="container-principal">
        <div className="main-info animate__animated animate__fadeInLeft">
          <h1
            className="main-info__title"
            dangerouslySetInnerHTML={{ __html: t("title") }}></h1>
          <p className="main-info__text">{t("description")}</p>
          <a className="btn btn-about" href="#about">
            {t("button")}
          </a>
        </div>
        <div className="hero-info animate__animated animate__fadeInRight">
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
