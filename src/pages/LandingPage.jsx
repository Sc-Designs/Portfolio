import React, { useEffect } from 'react';
import { motion } from "motion/react";
import { animate } from "motion";
import { useMediaQuery } from "react-responsive";
import profile_img from "/img/profile_img.png";
import { Link } from 'react-router-dom';

const LandingPage = ({ theme, loder }) => {
  const SmallMobile = useMediaQuery({ minWidth: 300, maxWidth: 500 })
  const isDesktop = useMediaQuery({ minWidth: 1000, maxWidth: 2000 })
  const Mobile = useMediaQuery({ minWidth: 500, maxWidth: 650 })
  const Tablet = useMediaQuery({ minWidth: 650, maxWidth: 1000 })
  useEffect(() => {
    if (loder) {
      const animation = (top, left) => animate(".image", { opacity: 1, top, left }, { delay: 2, duration: 1.5, ease: "easeIn", type: "spring" });
      if (SmallMobile) animation("27%", "50%");
      if (isDesktop) animation("45%", "75%");
      if (Mobile) animation("27%", "50%");
      if (Tablet) animation("25%", "50%");
    }
  }, [isDesktop, Mobile, SmallMobile, Tablet, loder]);
  useEffect(() => {
    if (loder) {
      animate(".line", { width: "60vh", opacity: 1 }, { delay: 2, duration: 1.5 })
      animate(".slogan", { x: 0, opacity: 1 }, { delay: 2, duration: 1.5 })
    }
  }, [loder])
  return (
    <div id='home' className='w-full h-screen relative z-30'>
      <motion.img
        initial={{ opacity: 0, top: 0, left: "80%" }}
        id="img_masked"
        src={profile_img}
        className='image w-[75vw] h-[75vw] sm:w-[95vw] sm:h-[95vw] md:w-[60vw] md:h-[60vw] top-[25%] left-[50%] lg:w-[40vw] lg:h-[40vw] lg:top-[45%] lg:left-[75%] absolute z-10 -translate-x-1/2 -translate-y-1/2'
        alt="Profile Image"
      />
      <div
        className='hidden pointer-events-none absolute left-12 top-1/2 opacity-30 text-lg -translate-y-1/2 -translate-x-1/2  -rotate-90 px-2 opacity-70 lg:flex items-center justify-center'>
        <p className=' font-mono'>2025</p>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          className={`line w-[60vh] h-[2px] mx-2 ${theme === 'dark' ? "bg-yellow-500" : "bg-black"} transition-all duration-300 ease-in-out delay-[0.6s]`}>
        </motion.div>
        <p className=' font-mono'>Developer</p>
      </div>
      <div className='w-full pt-80 lg:pt-0 lg:w-1/2 h-full flex justify-center flex-col items-center'>
        <motion.h1
          initial={{ x: -800, opacity: 0 }}
          className='ello slogan text-9xl  tracking-wider'><span id="h" className='text-[50vw] md:text-[30vw] lg:text-[20vw]'>H</span>ello</motion.h1>
        <motion.div
          initial={{ x: -800, opacity: 0 }}
          drag
          dragConstraints={{top: 0, left: 0 , right: 0, bottom : 0}}
          className='text-xl slogan font-thin flex gap-1 items-center'>
          <div className={`w-24 h-[1px] mt-2 ${theme === 'dark' ? "bg-yellow-500" : "bg-black"} transition-all duration-300 ease-in-out`}></div>
          <p className=' tracking-wider text-2xl'>it's Suvam Chakraborti</p>
        </motion.div>
        <Link
        to={'mailto:nfgaming4523@gmail.com'}
        >
        <motion.button
          initial={{ scale: 1 , rotate: 0}}
          whileHover={{ scale: 1.1 , rotate: 360}}
          transition={{ ease: "circInOut" }}
          className={`button ${theme === 'dark' ? "bg-yellow-500 text-black" : "bg-black text-yellow-500"}   slogan font-bold text-2xl px-12 py-3 mt-7 uppercase tracking-wider`}
          >
          Let's Chat
        </motion.button>
          </Link>
      </div>
    </div>
  );
};

export default LandingPage;
