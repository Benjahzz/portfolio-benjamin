import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import Title from '@/components/ui/Title'
import { Proyecto } from '@/types'
import { Github } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React, { use } from 'react'

import CldImage from '@/components/CldImage'
import { notFound } from 'next/navigation'
interface ProjectPageProps {
    params: {
        projectName: string
    }
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {

    const t = useTranslations('proyecto')

    if (!t) return notFound()
    const proyectos: Array<Proyecto> = t.raw('proyectos')
    const proyecto = proyectos.find((proyecto: Proyecto) => proyecto.name === params.projectName)

    if (!proyecto) return notFound()

    return (
        <main className='mt-6'>
            <Container>
                <div className="flex w-full flex-col gap-2 z-10 relative">
                    <h4 className='font-bold text-secondary'>{proyecto.type}</h4>
                    <Title variant={'secondary'} className='font-bold'>
                        {proyecto.name}
                    </Title>
                    <div className="absolute flex top-0 right-0">
                        <IconButton href={proyecto.githubLink} icon={Github} name='Github' />
                    </div>
                </div>
                <div className="flex gap-20 md:gap-36 mt-10 md:mt-4 items-center justify-between z-10 relative flex-col md:flex-row">
                    <div className="flex w-full md:w-fit rounded-md max-w-[25rem] md:max-w-none shadow-none shadow-[] md:shadow-[-2rem_2rem_0_.4rem_rgb(240,240,240)] md:dark:shadow-[-2rem_2rem_0_.4rem_rgb(54,54,54)] flex-1" >
                        <CldImage src={`/portfolio/${proyecto.image}/${proyecto.imageMain}`} width="800" height="400" className='rounded-md w-full' alt='imagen' />

                    </div>
                    <div className="bg-primary shadow-md dark:bg-primaryLight p-6 w-full max-w-[40rem] flex flex-col gap-6 rounded-md flex-1">
                        <h4 className='text-black dark:text-white'>{proyecto.puesto}</h4>
                        {
                            proyecto.linkPagina ? (
                                <Link href={proyecto.linkPagina}>
                                    <Button variant={'secondary'}>
                                        Ir a la página
                                    </Button>
                                </Link>
                            ) : (
                                <Button variant={'secondary'} disabled>
                                    Ir a la página
                                </Button>
                            )
                        }

                    </div>
                </div>
                <div className=" flex flex-col gap-40 mt-32 md:mt-52 z-10 relative">
                    {
                        proyecto.sections.map((section, index) => (

                            <div className="flex items-center gap-40 flex-col md:flex-row" key={section.id}>
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} `}>
                                    <Title variant={'secondary'} className='font-bold text-3xl'>
                                        {section.title}
                                    </Title>
                                    <p className='mt-6 '>
                                        {section.description}
                                    </p>
                                </div>
                                <div className={`flex-1 flex flex-wrap gap-8 justify-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} z-10 `}>
                                    {
                                        section.image.map((image, index) =>
                                            section.image.length > 1 ? (
                                                <picture className="rounded-md relative" key={index}>
                                                    <CldImage src={`/portfolio/${proyecto.image}/${image.image}`} width={image.width} height={image.height} className={`${image.border ? 'border-2 rounded-full' : 'rounded-md'}`} alt={`${proyecto.name} Image`} />

                                                </picture>
                                            ) : (
                                                <div className="w-fit flex justify-center relative " key={index} >
                                                    <CldImage src={`/portfolio/${proyecto.image}/${image.image}`} width={image.width} height={image.height} className={`object-contain z-20 relative ${image.border ? 'border-2 rounded-full' : 'rounded-md'} `} alt={proyecto.name} />


                                                    {
                                                        !image.border && (
                                                            <div className='absolute top-6 right-10 bg-primary shadow-md dark:bg-primaryLight w-full h-full rounded-lg z-10 hidden md:block' />
                                                        )
                                                    }
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="flex mt-40 gap-20 sm:gap-40 flex-wrap">
                    <div className="flex flex-col flex-1  gap-10">
                        <Title variant={'secondary'}>
                            {proyecto.toolsTitle}
                        </Title>
                        <div className="flex flex-wrap gap-12 justify-center text-center">
                            {
                                proyecto.languages.map((language, index) => (
                                    <div className="flex items-center gap-10 bg-primary shadow-md dark:bg-primaryLight p-4 rounded-md  z-10 relative" key={index}>
                                        <Image src={`/icons/${language}.webp`} alt={`${language} Icon`} width={40} height={40} />
                                    </div>

                                ))
                            }

                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-1 gap-10">
                        <Title variant={'secondary'}>
                            {proyecto.palette.title}
                        </Title>
                        <div className="flex flex-wrap gap-8 justify-center">
                            {
                                proyecto.palette.colors.map((color, index) => (
                                    <div className="flex flex-col justify-center text-center  z-10 relative" key={index}  >
                                        <div className="w-20 h-20 border-2 border-white rounded-md shadow-sm" style={{ backgroundColor: color.color }} />
                                        <span className='mt-2 text-sm'>{color.color}</span>
                                    </div>

                                ))
                            }

                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default ProjectPage