import Bubble from "@/components/ui/Bubble"

import {BiLogoJavascript} from 'react-icons/bi'


const Background = () => {
  return (
    <div className="opacity-50 sm:opacity-100">
        <Bubble icon="react" className="left-20 top-[300px] [--delay:15s] "/>
        <Bubble icon="javascript" className="left-1/4 top-52 [--delay:14s]"/>
        <Bubble icon="nodejs" className="right-32 top-64 [--delay:13s]"/>
        <Bubble icon="php" className="right-20 bottom-40 [--delay:10s]"/>
        <Bubble icon="sass" className="right-96 top-44 [--delay:17s]"/>
        <Bubble icon="vuejs" className="bottom-52 left-1/4 [--delay:15s]"/>
    </div>
  )
}

export default Background