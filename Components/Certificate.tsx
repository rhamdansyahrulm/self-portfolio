import React from 'react'
import Certificates_slides from './certificates_slides'

const Certificate = () => {
  return (
    <div className=" bg-black pb-[3rem] pt-[4rem] md:pt-[15rem]">
        <p className="text-center mt-[-100px] font-bold uppercase text-white">Empowering Myself Through Learning</p>
        <h2 className="text-center mt-[-100px] text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
                        Certi<span className="text-yellow-400">ficates</span>
        </h2>
        <Certificates_slides />
    </div>
  )
}

export default Certificate