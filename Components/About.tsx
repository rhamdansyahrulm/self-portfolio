import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import Image from "next/image";

const About = () => {
    return (
        <div className="bg-slate-900 pb-[3rem] pt-[4rem] md:pt-[15rem] h-[100vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                    <Image src="/images/about.png" alt="user" layout="fill" objectFit="contain" className="relative z-[11] w-[100%] h-[100%] object-contain"/>
                    <div className="absolute w-[100%] h-[100%] z-[10] bg-slate-400 top-[2rem] right-[-2rem]"></div>
                </div>
                <div>
                    <h1 className="text-[20px] font-bold uppercase text-slate-200 mb-[1rem]">
                        ABOUT ME
                    </h1>
                    <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-slate-200">
                        Transforming <span className="text-yellow-400">Visions</span>
                    </h2>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-200 rounded-sm"></span>
                        <p className="text-[19px] text-slate-100 w-[80%] text-justify">
                        <span className='font-bold text-yellow-400'> Hi there! </span>My name is <span className='font-bold text-yellow-400'> Rhamdan Syahrul </span>, graduated from <span className='font-bold text-yellow-400'> Gadjah Mada  University </span>, and I have a strong interest in <span className='font-bold text-slate-300'> data science, machine learning, and all things data-related </span>. As a data enthusiast, I love exploring the vast world of data and finding meaningful insights that can help businesses and organizations make better decisions. I'm fascinated by the power of machine learning and how it can be used to solve real-world problems and make our lives easier.
                        </p>
                    </div>
                    <button className="px-[2rem] hover:bg-yellow-400 hover:text-white transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-white text-yellow-400 flex items-center space-x-2">
                        <p> Download CV </p>
                        <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] hover:text-white text-yellow-400"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About