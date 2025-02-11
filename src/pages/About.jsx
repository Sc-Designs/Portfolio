import React, { useEffect, useRef } from 'react';
import {motion, useInView} from "motion/react";
import { animate } from 'motion';
const About = () => {
  const red = useRef(null);
  const violet = useRef(null);
  const inView = useInView(red, {once: true})
  const inview = useInView(violet, {once: true})
  useEffect(() => {
    inView ?
      animate(red.current, { scale: 1 }, { duration: 0.9 , ease:"easeOut"}) :
      animate(red.current, { scale: 0.5 }, { duration: 0.5 })
  }, [inView]);
  useEffect(() => {
    inview ?
      animate(violet.current, { scale: 1 }, { duration: 0.9 , ease:"easeOut"}) :
      animate(violet.current, { scale: 0.5 }, { duration: 0.5 })
  }, [inview]);
  return (
    <div id='about' className='w-full h-fit relative overflow-hidden'>
      <motion.div
      ref={red}
      initial={{rotate:0, scale:0}}
      animate={{rotate:"361deg", scale:1}}
      transition={{duration:10, repeat:Infinity, ease:"linear"}}
      className='circle h-[90vw] w-[90vw] md:h-[50vw] md:w-[50vw] lg:w-[30vw] lg:h-[30vw] rounded-full absolute z-10 top-32 -left-32 md:-left-44 md:top-20 lg:top-24 lg:-left-32 xl:-left-44 xl:top-10 -translate-x-1/2'></motion.div>
      <motion.div 
      ref={violet}
      initial={{rotate:0, scale:0}}
      animate={{rotate:"-361deg", scale:1}}
      transition={{duration:10, repeat:Infinity, ease:"linear"}}
      className='circle w-[90vw] h-[90vw] md:h-[50vw] md:w-[50vw] lg:w-[30vw] lg:h-[30vw] rounded-full absolute z-10 bottom-[5%] lg:bottom-[15%] md:bottom-[10%] md:left-[70%] lg:left-[80%] left-[50%] xl:left-[85%] xl:bottom-10 -translate-x-1/2'></motion.div>
      <div id="aboutBox" className='lg:w-full w-full h-fit py-20 lg:py-32 z-30 relative flex flex-col items-center justify-center gap-y-12'>
        <h1 className='text-4xl font-bold text-center font-black tracking-wide italic uppercase'>About</h1>
        <p className='ello capitalize lg:w-[60%] md:w-[80%] w-[90%] leading-snug lg:font-thin tracking-wide lg:tracking-wider lg:leading-loose text-center lg:text-justify text-3xl lg:text-2xl'>I'm a passionate web developer skilled in modern technologies such as React.js, Express.js, and Node.js . My expertise extends to building responsive and user-friendly interfaces with Tailwind CSS, HTML5, and CSS3, while leveraging JavaScript for dynamic functionality. I'm proficient in version control using GitHub and have hands-on experience with API testing using Postman. Committed to delivering high-quality, scalable web applications, I continuously seek to expand my knowledge and stay updated with industry trends.</p>
      </div>
    </div>
  )
}
export default About