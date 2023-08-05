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
import Image from 'next/image'
interface AccordionComponentProps {
  active?: boolean
  item?: Trabajo

}

const AccordionComponent: React.FC<AccordionComponentProps> = ({ active, item }) => {
  return (
    <Accordion as={"div"} className='w-full z-10' transition={{ duration: '400ms' }}>
      <AccordionItem isActive={active}>
        <AccordionHeader className="bg-secondary w-full flex justify-center gap-4 p-3 rounded-t-md group flex-wrap aria-[expanded=false]:rounded-md" >
          <h3 className='font-bold'>{item?.title}</h3>
          <div className="flex">
            <span className='mr-2'>({item?.fecha})</span>
            <Minus className='hidden group-aria-[expanded=true]:block font-bold' />
            <Plus className='block group-aria-[expanded=true]:hidden font-bold' />
          </div>
        </AccordionHeader>
        <AccordionBody >
          <div className="flex p-4 gap-4 bg-[#363636] rounded-b-md flex-col sm:flex-row lg:flex-col xl:flex-row ">
            <div className="flex-1 ">
              {item?.description}
            </div>
            <div className="flex flex-1 items-center gap-5 flex-col xs:flex-row ">
              <div className="flex flex-row gap-3 w-full sm:w-auto sm:flex-col">
                <div className="info__item w-full flex gap-2 border-dashed border p-1 rounded-md border-gray-500  items-center">
                  <MapPin size={22} />
                  {item?.location}
                </div>
                <a className="flex border-dashed border gap-2 p-1 rounded-md border-gray-500 items-center w-full hover:border-secondary hover:text-secondary transition-all" href={item?.link} target="_blank"  >
                  <ArrowUpRightSquare size={22} />
                  Ir a
                </a>
              </div>
              <div className="flex w-full">
                <Image src={`/images/${item?.image}`} alt="Empresa" width={400} height={300} className=' object-cover w-3/6 mx-auto xs:w-full max-w-[15rem]' />
              </div>

            </div>

          </div>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionComponent