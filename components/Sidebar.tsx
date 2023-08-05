'use client'
import { useSidebar } from "@/hooks/useSidebar"
import { useTranslations } from "next-intl"
import Link from "next/link"

const Sidebar = () => {

    const { isOpen } = useSidebar()
    const t = useTranslations('nav')
    if (!isOpen) {
        return null
    }
    return (
        <div className="h-screen w-screen p-10 items-center justify-center bg-primary z-30  flex md:hidden fixed">
            <ul className=" gap-6 text-white font-semibold md:flex">
                {
                    ['inicio', 'sobre', 'proyectos', 'contacto'].map((key) => (
                        <Link key={key} href={'/'} locale='en' className="hover:text-secondary">
                            {t(`${key}.label`)}
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar