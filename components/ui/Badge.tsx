import React from 'react'
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

const Badge = () => {
  return (
    <div className='absolute top-0 right-0  flex-col items-end group hidden xs:flex'>
      <AlertCircle size={30} className='fill-primary group-hover:dark:fill-gray-600 transition-colors cursor-pointer text-gray-500 dark:text-white' />
      <div className="right-0 bg-primary dark:bg-[#363636] p-3 mt-2 max-w-[16rem] text-center leading-[1.5] text-sm rounded-lg hidden group-hover:block shadow-md z-10">
        <p>
        Estos son algunos de mis proyectos, puedes encontrar más en mi {''}
        <Link href={"https://github.com/Benjahzz"} className='text-secondary' target='_blank'>
          Github
        </Link>
        </p>
      </div>
    </div>
  )
}

export default Badge