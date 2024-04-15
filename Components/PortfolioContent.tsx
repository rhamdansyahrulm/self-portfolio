import React from 'react'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid';

interface Props {
    title : string;
    role : string;
    image : string;  
}

const PortfolioContent = ({title, tools, image, desc}) => {
  return (
    <div className='flex flex-col text-center justify-center'>
        <Image src={image} alt={title} width={700} height={100} objectFit='contain' className='mx-auto mb-[2rem] rounded-f'/>
        <h1 className='text-[25px] text-white mt-[1rem]'>{title}</h1>
        <p className='text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4 rem]'>{tools}</p>
        <p className='text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto'>
          {desc}
        </p>
    </div>
  )
}

export default PortfolioContent