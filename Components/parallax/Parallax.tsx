import { useRef } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Image from 'next/image';

const Parallax_dsg = () => {
  const { scrollYProgress } = useViewportScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["80%", "-20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["2000%", "-900%"]);
  const xstar = useTransform(scrollYProgress, [0, 1], ["200%", "-100%"]);

return (
    <div className="w-full h-full relative bg-gradient-to-b from-[#111132] to-[#505064]">
      <div className="absolute w-full h-full">
      <motion.div style={{ x: xstar, y: yBg }} className="relative w-full h-full">
          <Image src="/images/stars.png" alt="Stars" fill objectFit="contain" />
          <Image src="/images/planets.png" alt="Planets" fill objectFit="contain" />
        </motion.div>
      </div>
      <div className="h-[100vh] bg-[url('/s/mountains.png')] z-[100] sticky flex  bg-cover bg-center items-center">
              <motion.h1 style={{ y: yText }} className="mx-auto text-6xl text-white uppercase font-bold">What I Did ?</motion.h1>
      </div>
    </div>
  );
};

export default Parallax_dsg;


