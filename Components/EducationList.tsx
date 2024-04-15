import React from 'react'

interface Props {
    title: string;
    year: string;
}

const EducationList = ({ title, year }) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem] bg-[#050101] pb-10'>
        <span className='px-[2rem] text-yellow-400 py-[0.9rem] font-bold text-[18px] border-[2px] border-white'>
            {year}
        </span>
        <h1 className='ml-[4%] mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
            {title}
        </h1>
        <ul className='ml-[7%] text-white font-bold w-[80%] text-[17px] opacity-85'>
            <li>
                1.&emsp;Lorem ipsum dolor sit
            </li>
            <li>
                2.&emsp;Lorem ipsum dolor sit
            </li>
        </ul>
    </div>
  )
}

export default EducationList