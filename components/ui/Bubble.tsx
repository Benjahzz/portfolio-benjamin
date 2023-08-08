'use client'
import { cn } from '@/libs/utils';
import { useRef, useState } from 'react';
import { FaReact, FaLaravel, FaJsSquare, FaPhp, FaSass, FaVuejs } from 'react-icons/fa'


type bubble = {
  icon: JSX.Element,
  backgroundColor: string
}
const styleIcons = (color: string) => {
  return {
    color: color,
    opacity: "0.5",
  };
}
const bubbleIcon: Record<string, bubble> = {
  react: {
    icon: <FaReact  style={styleIcons("#61dafb")} />,
    backgroundColor: 'border-sky-300 dark:bg-[#50505050]'
  },
  laravel: {
    icon: <FaLaravel style={styleIcons("#f55247")} />,
    backgroundColor: 'border-red-200 dark:bg-[#d2d8b350]'
  },
  javascript: {
    icon: <FaJsSquare style={styleIcons("#efd81d")} />,
    backgroundColor: 'border-yellow-300 border dark:bg-[#d4aa7d50]'

  },
  php: {
    icon: <FaPhp style={styleIcons("#8892bf")} />,
    backgroundColor: 'border-gray-300 dark:bg-[#90a9b750]'

  },
  sass: {
    icon: <FaSass style={styleIcons("#cc6699")} />,
    backgroundColor: 'border-red-200 dark:bg-[#4e343450]'

  },
  vuejs: {
    icon: <FaVuejs style={styleIcons("#42b883")} />,
    backgroundColor: 'border-green-300 dark:bg-[#90a9b750]'

  },
};

interface BubbleProps {
  icon: "react" | 'laravel' | 'javascript' | 'php' | 'sass' | 'vuejs'
  className: string
}


const Bubble: React.FC<BubbleProps> = ({ icon, className }) => {
  const [isTriggered, setIsTriggered] = useState(false)
  const bubbleIconRef = useRef<HTMLSpanElement>(null)
  const bubbleRef = useRef<HTMLSpanElement>(null)
  const onClick = () => {
    setIsTriggered(true)
    if (bubbleIconRef.current) {
      bubbleIconRef.current.style.opacity = "0"

      setTimeout(() => {
        bubbleRef.current!.style.opacity= "0"
      }, 300);

      setTimeout(() => {
        setIsTriggered(false)
        bubbleIconRef.current!.style.opacity = "1"
        bubbleRef.current!.style.opacity = "1"
      }, 5000);
    }

  }



  return (
    <span ref={bubbleRef} className={cn(`bubble p-4 fixed rounded-full text-2xl  z-10 md:cursor-none animate-floating border dark:border-none  ${isTriggered ? '--active cursor-none' : ''}`, className, bubbleIcon[icon].backgroundColor)} onClick={onClick}>
      <div className="reflex bg-white absolute w-3 h-6 bottom-[4px] right-[10px] rounded-[50%] opacity-60 rotate-45"></div>
      <span ref={bubbleIconRef}>
        {bubbleIcon[icon].icon}
        
      </span>
      <div className="trigger"></div>
      <div className="trigger"></div>
      <div className="trigger"></div>
      <div className="trigger"></div>
      <div className="trigger"></div>
    </span>
  )
}

export default Bubble