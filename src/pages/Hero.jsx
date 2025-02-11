import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import {useMediaQuery} from "react-responsive";

const Hero = () => {
  const ref = useRef(null);
  const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 2000 });
  const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1024 });


  // Track scroll progress inside the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Pins the div until the text fully moves
  });

  // Smooth out scroll progress to avoid jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    mass: 1,
  });

  // Map scroll progress to X-axis movement
  const x = useTransform(smoothProgress, [0, 1], isDesktop 
    ? ["0%", "-106%"] 
    : isTablet 
    ? ["0%", "-111%"] 
    : ["0%", "-5%"]
  );
  

  return (
    <div ref={ref} className="relative h-screen lg:h-[750vh] flex items-start justify-start">
        <motion.h1
        style={{ x }}
          className="hero text-[10vw] sm:text-[10vw] md:text-[10vw] lg:text-[40vw] xl:text-[35vw] pt-2 lg:pt-0 px-2 lg:px-0 top-24 text-center lg:text-left sticky lg:top-0 xl:top-0 xl:sticky tracking-tight font-thiner uppercase lg:whitespace-nowrap"
        >
          Let's create something amazing together! Give Your idea and we will make it Reality!
        </motion.h1>
    </div>
  );
};

export default Hero;
