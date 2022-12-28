import Bubble from "./bubble";

export default function Background() {
  const handleOnClickBubble = (e) => {
    
  }
  return (
    <div className="background">
      <Bubble icon={"javascript"}/>
      <Bubble icon={"laravel"}/>
      <Bubble icon={"php"}/>
      <Bubble icon={"sass"}/>
      <Bubble icon={"react"}/>
      <Bubble icon={"vuejs"}/>
    </div>
  );
}
