import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const Navlist = () => {
    const t = useTranslations("nav")
    return (
        <>

            {
                ['inicio', 'sobre', 'proyectos', 'contacto'].map((key) => (
                    <Link key={key} href={t(`${key}.href`)} className="hover:text-secondary">
                        {t(`${key}.label`)}
                    </Link>
                ))
            }
        </>
    )
}

export default Navlist