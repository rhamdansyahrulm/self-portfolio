import { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { certificate_image } from "@/constants";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 3;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const Certificates_slides = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv >= (certificate_image.length / 6) - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < certificate_image.length - 1) {
      setImgIndex((pv) => 2);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => 2);
    }
  };

  return (
    <div className="w-[80%] relative mx-auto overflow-hidden py-8 items-center">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-pointer active:-translate-y-6 transition-all duration-200 relative"
      >
        <Images imgIndex={imgIndex}/>
      </motion.div>

    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {certificate_image.map((certificate_imagerc, idx) => {
        return (
          <motion.div
            key={certificate_imagerc} // Use a unique key for each image
            style={{
              backgroundImage: `url(${certificate_imagerc})`, // Use the url() function for background images
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-[17%] shrink-0 rounded-xl object-cover transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative"
          />
        );
      })}
    </>
  );
};

export default Certificates_slides;
