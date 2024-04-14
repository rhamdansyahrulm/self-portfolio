import React, { useState } from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import Particle from './Particle';

import "react-vertical-timeline-component/style.min.css";

import { styles } from "@/styles";
import { experiences } from "@/constants";
import { starWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { Background } from "tsparticles-engine";

const ExperienceCard = ({ experience }) => {
  const [showPoints, setShowPoints] = useState(false);

  const togglePoints = () => {
    setShowPoints(!showPoints);
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff"
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div onClick={togglePoints} className='cursor-pointer'>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {showPoints && ( // Render points if showPoints is true
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      )}
    </VerticalTimelineElement>
  );
};

  
const Experience = () => {
  return (
    <div className="mt-[-24px] bg-[url('/images/banner.jpg')] bg-cover bg-center h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full mx-auto gap-[3rem]">
        <div className="lg:w-[500px] mx-auto md:mx-0 lg:h-[500px] w-[100px] h-[300px] relative col-span-1 flex items-center">
          <div className="ml-10">
            <motion.div variants={textVariant()}>
              <h1 className="text-[15px] font-bold uppercase text-slate-500 mb-[1rem] mt-[20vh]">
                What I have done so far
              </h1>
              <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
                Work <span className="text-yellow-400">Experience</span>
              </h2>
            </motion.div>
          </div>
        </div>

        <div className="col-span-3 flex items-center">
          <div className='mt-20 flex flex-col w-full'>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience-${index}`} 
                  experience={experience}
                />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

  
  
  

export default starWrapper(Experience, "work")