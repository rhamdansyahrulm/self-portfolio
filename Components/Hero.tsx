import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from "next/image";
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';

const Hero = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-b from-slate-600 to-slate-900 bg-cover bg-center">
        <Particle />
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
            
            <div>
                <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                    <button className="px-[1rem] hover:bg-yellow-400 hover:text-white transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase text-white flex items-center space-x-2">
                        <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] hover:text-white text-white"/>
                        <p> Linked in </p>
                    </button>
                    <button className="px-[2rem] hover:bg-yellow-400 hover:text-white transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase text-white flex items-center space-x-2">
                        <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] hover:text-white"/>
                        <p> Github </p>
                    </button>
                </div>
                <h1 className="text-[35px] md:text-[50px] text-white font-bold ">
                    HI, I'M <span className="text-yellow-400">RHAMDAN SYAHRUL !</span>
                </h1>
                <TextEffect />
                <p className="mt-[1rem] text-[18px] text-slate-200 text-justify">
                Welcome to my corner of the digital world, where data comes to life and insights take flight. As a passionate data enthusiast and skilled Python developer, Within this portfolio, you'll find a synthesis of my journey through the realms of data analysis, data science, and data engineering, intertwined with my expertise in Python development. From crafting predictive models to engineering data pipelines, each project represents a chapter in my ongoing quest to unravel the mysteries hidden within data. 
                </p>
                <br/>
                <p className="mt-[1rem] text-[18px] text-slate-200 text-justify">
                Please, take a moment to wander through the corridors of code and analysis, and may this journey ignite your curiosity and inspire new insights in the boundless world of data. Welcome, and let's embark on this data-driven adventure together!
                </p>
            </div>
            <div className="w-[500px] hidden bg-white relative lg:flex items-center rounded-full h-[500px] ml-40">
                <Image src="/images/u1.jpg" alt="user" layout="fill" className="object-cover rounded-full"/>
            </div>
        </div>
    </div>
  );
};

export default Hero 