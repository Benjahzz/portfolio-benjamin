import AccordionComponent from '@/components/ui/AccordionComponent';
import Title from '@/components/ui/Title'
import { Trabajo } from '@/types';
import { useTranslations } from 'next-intl';
import React, { Fragment } from 'react'

interface LaboralProps {
  title: string;
  laborales: Trabajo[];
}

const Laboral: React.FC<LaboralProps> = ({ laborales, title }) => {

  return (
    <div className='flex-1 flex flex-col gap-8'>
      <Title variant={"secondary"} className='font-bold'>
        {title}
      </Title>
      <div className="flex flex-col gap-4 ">
        {
          laborales.map((item: Trabajo, index: number) => (
            <Fragment key={item.id}>
              <AccordionComponent item={item} active={index === 0} />
              {
                index !== laborales.length - 1 && (
                  /* linea vertical*/
                  <div className="w-1 h-6 bg-white mx-4"></div>

                )
              }

            </Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default Laboral