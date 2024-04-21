import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Data Analyst',
        1500,
        'Data Scientist',
        1500,
        'Machine Learning Engineer',
        1500
      ]}
      
      speed={50}
      className="text-[20px] md:text-[3rem] text-white font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect