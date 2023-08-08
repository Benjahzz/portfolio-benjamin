import { cn } from "@/libs/utils"
import React from "react"

interface ContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode
   
}
const Container:React.FC<ContainerProps> = ({children,className}) => {
  return (
    <div className={cn("max-w-[1400px] w-[95%] md:w-11/12 p-4 md:p-6 mx-auto",className)}>
        {children}
    </div>
  )
}

export default Container


