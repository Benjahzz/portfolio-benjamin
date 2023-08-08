'use client'

import { useSidebar } from "@/hooks/useSidebar"
import { Menu } from "lucide-react"

const SidebarButton = () => {
    const {onOpen,isOpen,onClose} = useSidebar()
    const onClick = () =>{
        if(isOpen){
            onClose()
        }else{
            onOpen()
        }
    }
    
  return (
    <div className="border p-2 hover:bg-white hover:text-primary transition-colors block md:hidden text-white" onClick={onClick}>
        <Menu />
    </div>
  )
}

export default SidebarButton