import Image from "next/image";

import React from 'react'

const Blog = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-gradient-to-b from-slate-900 to-slate-700">
        <h1 className="text-[15px] font-bold uppercase text-slate-200 mb-[1rem] text-center">
        What I have done so far
        </h1>
        <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize font-bold text-white text-center">
            My <span className="text-yellow-400">BLOG</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
            <div>
                <div className="w-[100%] relative h-[400px]">
                    <Image src="/images/blog3.jpg" alt="blog" layout="fill" className="object-cover"/>
                </div>
                <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                    <div className="w-fit px-[2rem] py-[1rem] bg-yellow-400 relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                        December 10. 2023
                    </div>
                    <div className="flex flex-col md:flex-row items-center mt-[1rem]">
                        <h3 className="text-white text-center font-bold mx-auto">adasd asdas dasdasdas das</h3>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-[100%] relative h-[400px]">
                    <Image src="/images/blog3.jpg" alt="blog" layout="fill" className="object-cover"/>
                </div>
                <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                    <div className="w-fit px-[2rem] py-[1rem] bg-yellow-400 relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                        December 10. 2023
                    </div>
                    <div className="flex flex-col md:flex-row items-center mt-[1rem]">
                        <h3 className="text-white text-center font-bold mx-auto">adasd asdas dasdasdas das</h3>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-[100%] relative h-[400px]">
                    <Image src="/images/blog3.jpg" alt="blog" layout="fill" className="object-cover"/>
                </div>
                <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                    <div className="w-fit px-[2rem] py-[1rem] bg-yellow-400 relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                        December 10. 2023
                    </div>
                    <div className="flex flex-col md:flex-row items-center mt-[1rem]">
                        <h3 className="text-white text-center font-bold mx-auto">adasd asdas dasdasdas das</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog