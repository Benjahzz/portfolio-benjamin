import { Proyecto } from "@/types"
import React from "react";
import Title from "./ui/Title";
import Card from "./ui/Card";

interface ProyectoProps{
    proyecto: Proyecto;
}


const Proyecto: React.FC<ProyectoProps> = ({proyecto}) => {


  
  return (
    <div className="flex flex-col gap-2">
        {/* TODO: Hacer una flecha que lleve a la pagina para la gente que no se de cuenta del hover del placeholder */}
        <h5 className="text-secondary font-bold">{proyecto.type}</h5>
        <Title variant={"secondary"} className="mb-6">
            {proyecto.name}
        </Title>
        <Card languages={proyecto.languages} image={proyecto.image} text={proyecto.textHolder} placeholder={proyecto.placeholder} href={`/${proyecto.name}`} width={proyecto.width} height={proyecto.height}/>
    </div>
  )
}

export default Proyecto