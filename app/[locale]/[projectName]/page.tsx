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

    if (!t) return null
    const proyectos: Array<Proyecto> = t.raw('proyectos')
    const proyecto = proyectos.find((proyecto: Proyecto) => proyecto.name === params.projectName)

    if (!proyecto) return null

    return (
        <main className='mt-6'>
            <Container>
                <div className="flex w-full flex-col gap-2 z-10 relative">
                    <h4 className='font-bold text-secondary'>{proyecto.type}</h4>
                    <Title variant={'secondary'} className='font-bold'>
                        {proyecto.name}
                    </Title>
                    <div className="absolute flex top-0 right-0">
                        <IconButton href='https://github.com/Benjahzz' icon={Github} name='Github' />
                    </div>
                </div>
                <div className="flex gap-36 mt-4 items-center justify-between z-10 relative flex-col md:flex-row">
                    <div className="flex w-full md:w-fit rounded-md max-w-[25rem] md:max-w-none shadow-none md:shadow-[-2rem_2rem_0_.4rem_#363636] flex-1" >
                        <Image src={`/images/${proyecto.image}/${proyecto.imageMain}.webp`} width={600} height={400} alt={proyecto.name} className='rounded-md w-full' />
                    </div>
                    <div className="bg-primaryLight p-6 w-full max-w-[40rem] flex flex-col gap-6 rounded-md flex-1">
                        <h4 className='text-white'>{proyecto.puesto}</h4>
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
                <div className=" flex flex-col gap-40 mt-52 z-10 relative">
                    {
                        proyecto.sections.map((section, index) => (

                            <div className="flex items-center gap-40 flex-col md:flex-row" key={section.id}>
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} `}>
                                    <Title variant={'secondary'} className='font-bold text-3xl'>
                                        {section.title}
                                    </Title>
                                    <p className='mt-6'>
                                        {section.description}
                                    </p>
                                </div>
                                <div className={`flex-1 flex flex-wrap gap-8 justify-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} z-10 `}>
                                    {
                                        section.image.map((image, index) =>
                                            section.image.length > 1 ? (
                                                <div className="rounded-md relative" key={index}>
                                                    <Image src={`/images/${proyecto.image}/${image.image}.webp`} width={image.width} height={image.height} alt={proyecto.name} className='rounded-md' />
                                                </div>
                                            ) : (
                                                <div className="w-fit flex justify-center relative " key={index} >
                                                    <Image src={`/images/${proyecto.image}/${image.image}.webp`} width={image.width} height={image.height} alt={proyecto.name} className={`object-contain z-20 relative ${image.border ? 'border-2 rounded-full' : 'rounded-md'} `} />
                                                    {
                                                        !image.border && (
                                                            <div className='absolute top-6 right-10 bg-primaryLight w-full h-full rounded-lg z-10' />
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

                <div className="flex mt-40 gap-40">
                    <div className="flex flex-col flex-1  gap-10">
                        <Title variant={'secondary'}>
                            Tools
                        </Title>
                        <div className="flex flex-wrap gap-12 justify-center">
                            {
                                proyecto.languages.map((language, index) => (
                                    <div className="flex items-center gap-10 bg-primaryLight p-4 rounded-md bg-opacity-80 z-10 relative" key={index}>
                                        <Image src={`/icons/${language}.webp`} alt={`${language} Icon`} width={40} height={40} />
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-10">
                        <Title variant={'secondary'}>
                            Palette
                        </Title>
                        <div className="flex flex-wrap gap-8 justify-center">
                            {
                                proyecto.palette.map((color, index) => (
                                    <div className="flex flex-col justify-center text-center  z-10 relative" key={index}  >
                                        <div className="w-20 h-20 border-2 border-white rounded-md" style={{backgroundColor: color.color}} />
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