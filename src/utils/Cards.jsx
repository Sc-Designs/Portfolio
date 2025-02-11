import React from 'react';
import {motion} from "motion/react";
import { Link } from 'react-router-dom';
const Cards = ({img, name, para, link, theme}) => {
  return (
    <motion.div
    whileHover={{ y: -20, scale: 1.05 }}
    className={`w-full overflow-hidden lg:w-[48%] xl:w-[48%] 2xl:w-[32%] md:w-[48%] h-fit rounded-lg p-4 flex flex-col gap-y-10
     ${theme === "dark" ? "bg-gradient-to-b from-transparent from-30% to-lime-700" : "bg-gradient-to-b from-transparent from-30% to-red-900"}
     `}>
              <div className='flex items-center gap-x-5 lg:gap-x-10'>
              <img 
              src={img} 
              className='w-32 h-32 rounded-lg object-cover' 
              alt="" />
              <h1 className='text-2xl lg:text-4xl tracking-wider font-semibold uppercase'>{name}</h1>
              </div>
              <p className={`text-xl lg:text-2xl italic font-thin tracking-wider ${theme === "dark" ? "text-white" : "text-black"}`}>{para}</p>
              <Link 
              to={link}
              target='_blank'
              >
              <motion.button 
              whileHover={{ x : 10 }}
              className={`w-fit px-4 group transition-all duration-300 ease-in-out  h-12 rounded-lg ${theme === "dark" ? "bg-[#EAB308] text-black" : "bg-black text-[#EAB308]"} font-semibold tracking-wider group`}
              >
                Go To Visit 
                <span
                className='inline-block -rotate-[140deg] group-hover:scale-[2] group-hover:rotate-45 ml-2 group-hover:translate-x-96 transition-all duration-[2s] ease-in-out'
                >&#9992;</span>
                </motion.button>
                </Link>
    </motion.div>
  )
}
export default Cards