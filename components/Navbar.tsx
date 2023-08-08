'use client'

import Link from "next-intl/link"
import ToggleTheme from "./ToggleTheme"
import Container from "./Container"
import { useTranslations } from "next-intl"
import SidebarButton from "./SidebarButton"
import Languages from "./Languages"
import { useEffect, useState } from "react"



const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const t = useTranslations('nav')

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    }, [])
    return (
        <header className={`bg-navbar sticky w-full right-0 top-0 left-0 z-20 transition-colors ${isScrolled ? 'bg-[#2b2b2b] opacity-[.99]' : ''}`}>
            <Container>
                <nav className=" mx-auto flex justify-between items-center gap-10">
                    {/* Logo Icon */}
                    <div className="flex items-center gap-x-8 lg:gap-x-16">
                        <Link href={'/'}>
                            <svg width="52" height="84" viewBox="0 0 78 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6602 22.6126L31.0114 33.5958V100.787L10.6602 89.158V22.6126Z" fill="white" />
                                <path d="M4.19946 94.3262L14.8596 105.858V126.307L0 105.858L4.19946 94.3262Z" fill="white" />
                                <path d="M57.5002 40.3797L70.4217 32.3038V73.6523L57.5002 65.8995V40.3797Z" fill="white" />
                                <path d="M36.8259 57.5005L77.5284 84.6355L65.8991 94.9727L36.8259 78.8209V57.5005Z" fill="white" />
                                <path d="M24.5507 -6.10352e-05L70.0987 27.781L55.2391 38.4412L24.5507 21.3203V-6.10352e-05Z" fill="white" />
                                <path d="M19.3823 106.737L68.4838 91.7421L77.5288 104.663L19.3823 126.63V106.737Z" fill="white" />
                                <path d="M60.7306 94.762L77.5284 84.6353V104.664L60.7306 94.762Z" fill="white" />
                            </svg>
                        </Link>
                        <ToggleTheme />
                    </div>
                    <ul className=" gap-6 text-white font-semibold hidden md:flex">
                        {
                            ['inicio', 'sobre', 'proyectos', 'contacto'].map((key) => (
                                <Link key={key} href={t(`${key}.href`)} className="hover:text-secondary whitespace-nowrap">
                                    {t(`${key}.label`)}
                                </Link>
                            ))
                        }
                        <Languages />
                    </ul>
                    <SidebarButton />
                </nav>
            </Container>
        </header>

    )
}

export default Navbar