
'use client'
import Image from 'next/image';
import spainFlag from '@/public/icons/spain.png'
import englishFlag from '@/public/icons/english.png'
import Link from 'next-intl/link';
import React from 'react';
import { useParams } from 'next/navigation';
import {usePathname} from 'next-intl/client';



const Languages = () => {
    const params = useParams()
    const pathname = usePathname()
    const languages = [
        {
            label: 'spain',
            image: spainFlag,
            locale: 'es'
        },
        {
            label: 'english',
            image: englishFlag,
            locale: 'en'
        },
    ]

    return (
        <div className='flex gap-2'>

            {
                languages.map((language) => (
                    <Link key={language.locale} className="relative w-6 h-6 " href={`${pathname}`} locale={language.locale} >
                        <Image src={language.image} fill alt={`${language.label} flag`} className={`rounded-full object-cover ${params.locale === language.locale ? 'border-white border-2' : ''}`} />

                    </Link>

                ))
            }

        </div>
    )
}

export default Languages