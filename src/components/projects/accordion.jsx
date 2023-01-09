import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import {GoLocation} from "react-icons/go"
import {BsBoxArrowUpRight} from "react-icons/bs"
export default function AccordionComponent({ item,active}) {
  return (
    <Accordion as={"div"}>
      <AccordionItem className="accordion-item" isActive={active}>
        <AccordionHeader className="accordion-header" >
          <h3>{item?.title}</h3>
          <div className="right-side">
            <span>{item?.fecha}</span>
            <i className="fa-solid fa-minus"></i>
            <i className="fa-solid fa-plus"></i>

          </div>
        </AccordionHeader>
        <AccordionBody className="accordion-body">
          <div className="accordion-body__content">
            <div className="accordion-body__content__description">
              {item?.description}
            </div>
            <div className="accordion-body__content__info">
              <div className="info">
                <div className="info__item">
                  <GoLocation />
                  {item?.location}
                </div>
                <a className="info__item" href={item?.link} target="_blank">
                  <BsBoxArrowUpRight />
                  Ir a
                </a>
              </div>
              <div className="img">
                <img src={`/img/${item?.image}`} alt="Empresa" width={320} height={130} />
              </div>
            </div>
          </div>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
