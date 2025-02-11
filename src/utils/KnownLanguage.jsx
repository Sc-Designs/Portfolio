import React from 'react'
import { motion } from "motion/react"
const KnownLanguage = ({theme}) => {
    const array = [
        {name:"HTML",
        icon:"ri-html5-fill"
        },
        {name:"CSS",
        icon: "ri-css3-fill"
        }, 
        {name:"JavaScript",
        icon:"ri-javascript-fill"
        }, 
        {name:"React",
        icon:"ri-reactjs-fill"
        }, 
        {name:"Node.js",
        icon:"ri-nodejs-fill"
        }, 
        {name:"Express.js",
        icon:"ri-javascript-fill"
        }, 
        {name:"MongoDB",
        icon:"ri-database-2-fill"
        }, 
        {name:"GitHub",
        icon:"ri-github-fill"
        }, 
        {name:"Tailwind",
        icon:"ri-tailwind-css-fill"
        }
    ]
  return (
    <div className={`w-full h-24 transition-all duration-300 relative overflow-hidden ${theme === "dark" ? "scroll-dark" : "scroll-light"}`}>
      <motion.div
      animate={{x:["0%" , "-49%"]}}
      transition={{duration:40, repeat:Infinity, ease:"linear"}}
      className='scrolltext w-fit h-full flex gap-x-5 items-center text-2xl'
      >
            {array.map((language, index) => (
                <p key={index} className='font-semibold'>
                    <i className={`${language.icon} text-3xl`}></i>
                    {language.name}
                    </p>
            ))}
            {array.map((language, index) => (
                <p key={index} className='font-semibold'>
                    <i className={`${language.icon} text-2xl pr-1`}></i>
                    {language.name}
                    </p>
            ))}
            {array.map((language, index) => (
                <p key={index} className='font-semibold'>
                    <i className={`${language.icon} text-2xl pr-1`}></i>
                    {language.name}
                    </p>
            ))}
            {array.map((language, index) => (
                <p key={index} className='font-semibold'>
                    <i className={`${language.icon} text-2xl pr-1`}></i>
                    {language.name}
                    </p>
            ))}
            {array.map((language, index) => (
                <p key={index} className='font-semibold'>
                    <i className={`${language.icon} text-2xl pr-1`}></i>
                    {language.name}
                    </p>
            ))}
      </motion.div>
    </div>
  )
}
export default KnownLanguage