import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
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
                  <i className="fa-solid fa-location-dot"></i>
                  {item?.location}
                </div>
                <a className="info__item" href={item?.link} target="_blank">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  Ir a
                </a>
              </div>
              <div className="img">
                <img src={`./img/${item?.image}`} alt="" />
              </div>
            </div>
          </div>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
