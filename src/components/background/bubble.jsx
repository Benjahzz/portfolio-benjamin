import { useRef } from "react";
import {FaSass, FaReact, FaJsSquare, FaPhp, FaLaravel, FaVuejs} from 'react-icons/fa';

export default function Bubble({ icon }) {
  const styleIcons = (color) => {
    return {
      color: color,
      opacity: "0.5",
    };
  }
  const bubbleIcon = {
    react: <FaReact style={styleIcons("#61dafb")} />,
    laravel: <FaLaravel style={styleIcons("#f55247")}/>,
    javascript: <FaJsSquare style={styleIcons("#efd81d")}/>,
    php: <FaPhp style={styleIcons("#8892bf")}/>,
    sass: <FaSass style={styleIcons("#cc6699")}/>,
    vuejs: <FaVuejs style={styleIcons("#42b883")}/>,
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
      <span ref={bubbleIconRef} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {bubbleIcon[icon] }

      </span>
    </span>
  );
}
