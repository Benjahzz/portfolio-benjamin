'use client'
import { useSidebar } from "@/hooks/useSidebar"
import { useTranslations } from "next-intl"
import Link from "next/link"
import Button from "./ui/Button"
import { X } from "lucide-react"
import ToggleTheme from "./ToggleTheme"
import Languages from "./Languages"

const Sidebar = () => {

    const { isOpen, onClose } = useSidebar()
    const t = useTranslations('nav')
    if (!isOpen) {
        return null
    }
    return (
        <div className="h-screen w-screen p-10 items-center justify-center bg-primary z-40  flex flex-col gap-6 md:hidden fixed">
            <button onClick={onClose}>
                <X size={32} className="absolute top-14 right-14 cursor-pointer hover:text-secondary" />
            </button>
            <ul className=" gap-6 text-black dark:text-white font-semibold flex flex-col items-center text-xl">
                {
                    ['inicio', 'sobre', 'proyectos', 'contacto'].map((key) => (
                        <Link key={key} href={t(`${key}.href`)} locale='en' className="hover:text-secondary" onClick={onClose}>
                            {t(`${key}.label`)}
                        </Link>
                    ))
                }
            </ul>
            <div className="flex items-center gap-6">
                <ToggleTheme className="flex" />
                <Languages />
            </div>

        </div>
    )
}

export default Sidebar