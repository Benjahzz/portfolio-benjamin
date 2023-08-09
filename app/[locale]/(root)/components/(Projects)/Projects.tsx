'use client'
import Proyecto from '@/components/Proyecto'
import Badge from '@/components/ui/Badge'
import Title from '@/components/ui/Title'
import { Proyecto as ProyectoType } from '@/types'
import { useTranslations } from 'next-intl'
import React from 'react'

const Projects = () => {
    const t = useTranslations('proyecto')
    const proyectos = t.raw('proyectos')
    return (
        <section className=' flex flex-col gap-24 relative ' id='projects'>
            <Title variant={'default'}>
                {t('title')}
            </Title>
            <Badge />
            <div className='grid grid-auto-fit-[min(100%,22.5rem)] gap-36'>
                {
                    proyectos.map((proyecto: ProyectoType) => (
                        <Proyecto proyecto={proyecto} key={proyecto.id}  />
                    ))
                }
            </div>
        </section>
    )
}

export default Projects