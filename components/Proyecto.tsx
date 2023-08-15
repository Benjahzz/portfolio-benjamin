import { Proyecto } from "@/types"
import React from "react";
import Title from "./ui/Title";
import Card from "./ui/Card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProyectoProps{
    proyecto: Proyecto;
}


const Proyecto: React.FC<ProyectoProps> = ({proyecto}) => {


  
  return (
    <div className="flex flex-col gap-2 relative">
        {/* TODO: Hacer una flecha que lleve a la pagina para la gente que no se de cuenta del hover del placeholder */}
        <h5 className="text-secondary font-bold">{proyecto.type}</h5>
        <Title variant={"secondary"} className="mb-6">
            {proyecto.name}
        </Title>
        {proyecto.completed && (

          <Link href={`/${proyecto.name}`} prefetch={false} className="absolute top-10 right-0 z-20 block">
            <ArrowRight size={24}/>
          </Link>
        )}
        <Card languages={proyecto.languages} image={proyecto.imageMain} text={proyecto.textHolder} placeholder={proyecto.placeholder} href={`/${proyecto.name}`} width={proyecto.width} height={proyecto.height} placeholderText={proyecto.placeholderText}/>
    </div>
  )
}

export default Proyecto