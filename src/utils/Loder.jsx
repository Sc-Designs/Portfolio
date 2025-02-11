import React from 'react'
import { animate, motion } from "framer-motion"
const Loder = ({loder}) => {
    if(loder.loders){
      animate(".text",{opacity: 0}, {duration:2 ,ease: "circInOut"});
       animate(".lefts",{left: "-51%"}, {delay: 1,duration:4 ,ease: "circInOut"});
       animate(".rights",{left: "101%"}, {delay: 1,duration:4 ,ease: "circInOut"});
      }

  return (
    <div 
    className='w-[100vw] h-screen fixed top-0 left-0 flex items-center justify-center z-50 pointer-events-none'>
      <motion.div
      className='lefts w-[51vw] h-full bg-[#0E0E0E] absolute top-0 left-0'
      >
      </motion.div>
      <motion.div
      className='rights w-[51vw] h-full bg-[#0E0E0E] absolute top-0 left-1/2'
      >
      </motion.div>
        <motion.div
        initial={{width: "0vw"}}
        animate={{width: "fit-content"}}
        transition={{duration:3, ease:"circInOut"}}
        onAnimationComplete={() => loder.setloders(true)}
        className='overflow-hidden w-fit h-fit absolute'
        >
      <motion.h1 
      className='text text-3xl md:text-5xl lg:text-7xl xl:text-8xl px-6 text-text-500 uppercase font-bold text-center whitespace-nowrap'>
        I am for you to help!
        </motion.h1>
          </motion.div>
    </div>
  )
}
export default Loder;