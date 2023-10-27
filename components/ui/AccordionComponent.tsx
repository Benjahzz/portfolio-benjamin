'use client'
import { Trabajo } from '@/types';
import { ArrowUpRightSquare, MapPin, Minus, Plus } from 'lucide-react';
import React from 'react'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import CldImage from '../CldImage';
interface AccordionComponentProps {
  active?: boolean
  item?: Trabajo

}

const AccordionComponent: React.FC<AccordionComponentProps> = ({ active, item }) => {

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Accordion as={"div"} className='w-full z-10' transition={{ duration: '400ms' }}>
      <AccordionItem isActive={active}>
        <AccordionHeader className="bg-secondary w-full flex justify-center gap-4 p-3 rounded-t-md group flex-wrap aria-[expanded=false]:rounded-md  text-white " >
          <h3 className='font-bold '>{item?.title}</h3>
          <div className="flex">
            <span className='mr-2'>({item?.fecha})</span>
            <Minus className='hidden group-aria-[expanded=true]:block font-bold' />
            <Plus className='block group-aria-[expanded=true]:hidden font-bold' />
          </div>
        </AccordionHeader>
        <AccordionBody className='shadow-md '>
          <div className="flex p-4 gap-4  shadow-lg dark:bg-primaryLight rounded-b-md flex-col sm:flex-row lg:flex-col xl:flex-row md:items-center ">
            <div className="flex-1 ">
              {item?.description}
            </div>
            <div className="flex flex-1 items-center gap-5 flex-col xs:flex-row ">
              <div className="flex flex-row gap-3 w-full flex-1 md:flex-initial sm:w-auto sm:flex-col justify-center ">
                <div className="info__item w-full flex gap-2 border-dashed border p-1 rounded-md border-gray-500  max-w-[8rem] items-center break-keep">
                  <MapPin size={22} />
                  {item?.location}
                </div>
                <a className="flex border-dashed border gap-2 p-2 rounded-md border-gray-500 max-w-[8rem] items-center w-full hover:border-secondary hover:text-secondary transition-all break-keep" href={item?.link} target="_blank"  >
                  <ArrowUpRightSquare size={22} />
                  {item?.goPage}
                </a>
              </div>
              <div className="flex w-full flex-1">
                <CldImage src={`/portfolio/${item?.image}`} width={400} height={300} className=' object-cover w-3/6 mx-auto xs:w-full max-w-[12rem] min-w-[8rem] ' alt={item?.title}/>
              </div>

            </div>

          </div>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionComponent