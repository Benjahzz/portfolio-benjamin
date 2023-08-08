import Card from '@/components/ui/Card';
import Title from '@/components/ui/Title';
import { Curso } from '@/types';
import { useTranslations } from 'next-intl'
import React from 'react'

interface LaboralProps {
  title: string;
  cursos: Curso[];
}


const Courses: React.FC<LaboralProps> = ({ cursos, title }) => {
  return (
    <div className='flex-1 flex flex-col gap-8'>
      <Title variant={"secondary"} className='font-bold'>
        {title}
      </Title>
      <div className="flex flex-wrap justify-center gap-10">
        {
          cursos.map((curso, index) => (
            <div className="min-w-[12rem] w-52 2xl:w-72"  key={curso.id}>
              <Card image={curso.image} completed={curso.completed} textHolder={curso.textHolder} href={curso.link} target='_blank' width={curso.width} height={curso.height}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Courses