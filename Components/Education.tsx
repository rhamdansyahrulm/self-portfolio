import React from 'react'
import EducationList from './EducationList'

const Education = () => {
    return (
      <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#141414]'>
          <h1 className="text-[15px] font-bold uppercase text-slate-200 mb-[1rem] text-center">
              What I have done so far
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] mb-[-50px] capitalize font-bold text-white text-center">
              My <span className="text-yellow-400">Project</span>
          </h2>
  
          <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]'>
              <div className="relative">
                  <div>
                      <h3 className="text-[20px] md:text-[25px] lg:text-[30px] font-bold text-white mb-[3rem]">Formal Education</h3>
                      <EducationList title="Gadjah Mada University" year="2019-2023"/>
                  </div>
              </div>
              <div className="relative">
                  <div>
                      <h3 className="text-[20px] md:text-[25px] lg:text-[30px] font-bold text-white mb-[3rem]">Non-formal Education</h3>
                      <EducationList title="Gadjah Mada University" year="2019-2023"/>
                      <div className="relative top-0 left-[50%] w-[5px] opacity-70 h-[100px] bg-white transform -translate-x-1/2 mt-[-125px]"></div>
                      <EducationList title="Gadjah Mada University" year="2019-2023"/>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  

export default Education
