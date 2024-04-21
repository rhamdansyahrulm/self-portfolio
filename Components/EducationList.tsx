import React from 'react'

interface Props {
    univ: string;
    major: string;
    year: string;
    point: string;
}

const EducationList = ({ education, index }) => {
  return (
    <>
    {index !== 0 && (
        <div className="relative top-0 left-[50%] w-[5px] opacity-70 h-[100px] bg-white transform -translate-x-1/2 mt-[-125px]"></div>
    )}
    <div className='mb-[4rem] md:mb-[8rem] bg-[#050101] pb-10'>
        <span className='px-[2rem] text-yellow-400 py-[0.9rem] font-bold text-[18px] border-[2px] border-white'>
            {education.year}
        </span>
        <h1 className='ml-[4%] mt-[2rem] uppercase font-semibold mb-[0.5rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
            {education.univ}
        </h1>
        <p className='ml-[4%] uppercase font-semibold mb-[1rem] text-[12px] sm:text-[14px] md:text-[14px] text-white'>
            {education.major}
        </p>
        <ul className='ml-[8%] list-decimal text-white text-justify w-[80%] text-[17px] opacity-85'>
            {education.points.map((point, index) => (
                <li key={`experience-point-${index}`}
                    className='text-white text-[14px] tracking-wider mb-2'>
                        {point}
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default EducationList