import { Link } from "react-router-dom";

export default function CardProject({ item }) {
  return (
    <div className="container-card">
      <h4 className="card__type">{item?.tipo}</h4>
      {item?.name ? <h2 className="card__title ">{item?.name}</h2> : null}

      <div className={`card ${item.completed === true ? "" : "developing"} `}>
        <div className="card__image">
          <img
            src={`./img/${item?.image}`}
            alt="project-image"
            className="card__image__principal"
          />
          {item?.completed ? (
            
              <div className="placeholder">
                {
                  item?.name ? (
                    <img
                  src={`./img/placeholder/placeholder-${item?.name}.png`}
                  alt=""
                />
                  ) : null
                }
                ver más
              </div>
          ) : null}
        </div>
        <div className="card__footer">
          {item.languages
            ? item.languages.map((item, index) => (
                <div className="card__footer__item" key={index}>
                  
                  <img src={`./img/${item}.png`} alt="" />
                </div>
              ))
            : item.nameFooter}
        </div>
      </div>
    </div>
  );
}
