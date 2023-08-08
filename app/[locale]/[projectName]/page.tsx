import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import Title from '@/components/ui/Title'
import { Proyecto } from '@/types'
import { Github, Languages } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React, { use } from 'react'

interface ProjectPageProps {
    params: {
        projectName: string
    }
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {

    const t = useTranslations('proyecto')

    const proyectos: Array<Proyecto> = t.raw('proyectos')
    /*const proyecto = proyectos.find((proyecto: Proyecto) => proyecto.name === params.projectName)*/


    return (
        <main className='mt-6'>
            <Container>
                asas
            </Container>
        </main>
    )
}

export default ProjectPage