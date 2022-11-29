import { useRef } from "react";

export default function Bubble({ icon }) {
  const bubbleIcon = {
    react: <i className="fa-brands fa-react"></i>,
    laravel: <i className="fa-brands fa-laravel"></i>,
    javascript: <i className="fa-brands fa-square-js"></i>,
    php: <i className="fa-brands fa-php"></i>,
    sass: <i className="fa-brands fa-sass"></i>,
    vuejs: <i className="fa-brands fa-vuejs"></i>,
  };
  const bubbleRef = useRef(null);
  const bubbleIconRef = useRef(null);
  const handleOnClickBubble = (e) => {
    if (!bubbleRef.current.classList.contains("--active")) {
      bubbleRef.current.classList.toggle("--active");
      bubbleIconRef.current.style.opacity = 0;
      setTimeout(() => {
        bubbleRef.current.style.opacity = "0";
      }, 300);
      setTimeout(() => {
        bubbleRef.current.classList.toggle("--active");
        bubbleRef.current.style.opacity = "1";
        bubbleIconRef.current.style.opacity = 1;
      }, 4500);
    }
  };
  return (
    <span className="bubble" ref={bubbleRef} onClick={handleOnClickBubble}>
      <div className="trigger"></div>
      <div className="trigger"></div>
      <div className="trigger"></div>
      <div className="trigger"></div>
      <div className="trigger"></div>
      
      <div className="reflex"></div>
      <span ref={bubbleIconRef}>
        {bubbleIcon[icon] }
      </span>
    </span>
  );
}
