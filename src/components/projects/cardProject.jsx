import { Link } from "react-router-dom";

export default function CardProject({ item }) {
  return (
    <div className="container-card">
      <h4 className="card__type">{item?.tipo}</h4>
      {item?.name ? <h2 className="card__title ">{item?.name}</h2> : null}
      {item?.type ? (
        <a href={item?.link} target="_blank">
          <div
            className={`card ${item.completed === true ? "" : "developing"} `}>
            <div className="card__image">
              <picture>
                <source type="image/webp" srcSet={`/img/${item?.image}.webp`} />
                <img
                  src={`./img/${item?.image}.webp`}
                  alt="project-image"
                  className="card__image__principal"
                />
              </picture>
              <div className="placeholder">
                {item?.name ? (
                  <img
                    src={`./img/placeholder/placeholder-${item?.image}.webp`}
                    alt=""
                  />
                ) : null}
                Ver más
              </div>
            </div>
            <div className="card__footer">
              {item.languages
                ? item.languages.map((item, index) => (
                    <div className="card__footer__item" key={index}>
                      <img src={`./img/${item}.webp`} alt="" />
                    </div>
                  ))
                : item.nameFooter}
            </div>
          </div>
        </a>
      ) : (
        <div className={`card ${item.completed === true ? "" : "developing"} `}>
          <div className="card__image">
          <img
                src={`./img/${item?.image}.webp`}
                alt="project-image"
                className="card__image__principal"
              />
            {item?.completed ? (
              <Link to={`/project/${item?.name}`}>
                <div className="placeholder">
                  {item?.name ? (
                    <img
                      src={`./img/placeholder/placeholder-${item?.image}.webp`}
                      alt=""
                    />
                  ) : null}
                  Ver más
                </div>
              </Link>
            ) : null}
          </div>
          <div className="card__footer">
            {item.languages
              ? item.languages.map((item, index) => (
                  <div className="card__footer__item" key={index}>
                    <img src={`./img/${item}.webp`} alt="" />
                  </div>
                ))
              : item.nameFooter}
          </div>
        </div>
      )}
    </div>
  );
}
