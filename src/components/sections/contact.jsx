import Formulario from "../formulario";
import CV from "../../assets/CV_BenjaminBastidas.pdf"

export default function Contact(){
    return(
        <section className="section-contact" id="contact" >
          <h2 className="section-title">Contáctame</h2>
          <div className="container-contacto">
            <div className="contacto-info">
              <h3 className="contacto-info__title">
                Deseas contactarte conmigo?
              </h3>
              <ul className="contacto-info__information">
                <li className="contacto-info__item">
                  Email: <span>ben.ja07@live.cl</span>
                </li>
                <li className="contacto-info__item">
                  Nombre: <span>Benjamin Bastidas</span>
                </li>
              </ul>
              <a className="btn btn-cv" download="" href={CV}>Descargar CV</a>
            </div>
            <div className="container-formulario">
              <Formulario />
            </div>
          </div>
        </section>
    )
}