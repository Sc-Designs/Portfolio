import React,{ useEffect} from 'react'
import {motion, animate} from 'motion/react'

const Light_Dark = ({isOpen}) => {
    useEffect(()=>{
      if(isOpen){
        animate('.background',{scale:800, zIndex:0}, {duration:2.5})
      }else{
        animate('.background',{scale:0, zIndex:0}, {duration:0.5})
      }
    },[isOpen])
  return (
    <motion.div className='background fixed w-[1vw] h-[1vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500 left-[100%] top-2 z-10'></motion.div>
  )
}

export default Light_Dark